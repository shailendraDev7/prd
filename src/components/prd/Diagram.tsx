import React, { useEffect, useRef, useState } from 'react';
import svgPanZoom, { SvgPanZoomInstance } from 'svg-pan-zoom';

interface Entity {
  id: string;
  transform: string;
}

interface Action {
  entityId: string;
  transform: string;
  text?: string;
}

const Diagram: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [panZoomInstance, setPanZoomInstance] = useState<SvgPanZoomInstance | null>(null);
  const [selectedElement, setSelectedElement] = useState<SVGElement | null>(null);
  const [startPos, setStartPos] = useState({ mouseX: 0, mouseY: 0, transformX: 0, transformY: 0 });
  const [entities, setEntities] = useState<Entity[]>([]);
  const [history, setHistory] = useState<Action[]>([]);
  const [dimensions, setDimensions] = useState({ width: 1690.32, height: 815 });

  useEffect(() => {
    if (svgRef.current && containerRef.current) {
      const instance = svgPanZoom(svgRef.current, {
        zoomEnabled: true,
        panEnabled: true,
        controlIconsEnabled: false,
        fit: true,
        center: true,
        minZoom: 0.5,
        maxZoom: 3,
        zoomScaleSensitivity: 0.1,
        eventsListenerElement: svgRef.current,
      });
      setPanZoomInstance(instance);

      const draggableElements = svgRef.current.querySelectorAll('.draggable');
      const initialEntities: Entity[] = Array.from(draggableElements).map((el) => ({
        id: el.id,
        transform: el.getAttribute('transform') || '',
      }));
      setEntities(initialEntities);

      const updateDimensions = () => {
        if (containerRef.current) {
          const { width, height } = containerRef.current.getBoundingClientRect();
          setDimensions({ width, height });
        }
      };
      updateDimensions();
      window.addEventListener('resize', updateDimensions);

      return () => {
        instance.destroy();
        window.removeEventListener('resize', updateDimensions);
      };
    }
  }, []);

  const updateArrows = () => {
    const paths = svgRef.current?.querySelectorAll('.relationshipLine');
    if (!paths) return;

    paths.forEach((path) => {
      const startId = path.getAttribute('data-start');
      const endId = path.getAttribute('data-end');
      const startEntity = svgRef.current?.querySelector(`#${startId}`);
      const endEntity = svgRef.current?.querySelector(`#${endId}`);

      if (startEntity && endEntity) {
        const startCTM = startEntity.getCTM();
        const endCTM = endEntity.getCTM();
        const startBBox = startEntity.getBBox();
        const endBBox = endEntity.getBBox();

        if (startCTM && endCTM) {
          const startPoint = svgRef.current!.createSVGPoint();
          startPoint.x = startBBox.x + startBBox.width;
          startPoint.y = startBBox.y + startBBox.height / 2;
          const transformedStart = startPoint.matrixTransform(startCTM);

          const endPoint = svgRef.current!.createSVGPoint();
          endPoint.x = endBBox.x;
          endPoint.y = endBBox.y + endBBox.height / 2;
          const transformedEnd = endPoint.matrixTransform(endCTM);

          path.setAttribute('d', `M${transformedStart.x},${transformedStart.y} L${transformedEnd.x},${transformedEnd.y}`);

          const relationshipLabelId = path.id.replace('path-', '');
          const labelRect = svgRef.current?.querySelector(`#${relationshipLabelId}`)?.previousElementSibling as SVGRectElement;
          const labelText = svgRef.current?.querySelector(`#${relationshipLabelId}`) as SVGTextElement;

          if (labelRect && labelText) {
            const midX = (transformedStart.x + transformedEnd.x) / 2;
            const midY = (transformedStart.y + transformedEnd.y) / 2;
            const textBBox = labelText.getBBox();

            labelRect.setAttribute('x', (midX - textBBox.width / 2 - 5).toString());
            labelRect.setAttribute('y', (midY - textBBox.height / 2 - 2).toString());
            labelRect.setAttribute('width', (textBBox.width + 10).toString());
            labelRect.setAttribute('height', (textBBox.height + 4).toString());
            labelText.setAttribute('x', midX.toString());
            labelText.setAttribute('y', (midY + textBBox.height / 4).toString());
          }
        }
      }
    });
  };

  const handleMouseDown = (e: React.MouseEvent<SVGElement>) => {
    if (e.button !== 0) return;
    const target = e.currentTarget as SVGElement;
    setSelectedElement(target);

    const transform = target.getAttribute('transform') || 'translate(0,0)';
    const match = transform.match(/translate\(([^,]+),([^)]+)\)/);
    const transformX = match ? parseFloat(match[1]) : 0;
    const transformY = match ? parseFloat(match[2]) : 0;

    setStartPos({
      mouseX: e.clientX,
      mouseY: e.clientY,
      transformX,
      transformY,
    });

    panZoomInstance?.disablePan();
    e.stopPropagation();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!selectedElement || !panZoomInstance) return;

    const deltaX = (e.clientX - startPos.mouseX) / panZoomInstance.getSizes().realZoom;
    const deltaY = (e.clientY - startPos.mouseY) / panZoomInstance.getSizes().realZoom;
    const newX = startPos.transformX + deltaX;
    const newY = startPos.transformY + deltaY;

    selectedElement.setAttribute('transform', `translate(${newX},${newY})`);
    updateArrows();
  };

  const handleMouseUp = () => {
    if (selectedElement) {
      const newTransform = selectedElement.getAttribute('transform') || 'translate(0,0)';
      setHistory((prev) => [
        ...prev,
        { entityId: selectedElement.id, transform: newTransform },
      ]);
      setSelectedElement(null);
      panZoomInstance?.enablePan();
      updateArrows();
    }
  };

  const handleDoubleClick = (e: React.MouseEvent<SVGTextElement>) => {
    const textElement = e.currentTarget;
    const originalText = textElement.textContent || '';
    const rect = textElement.getBoundingClientRect();

    const input = document.createElement('input');
    input.value = originalText;
    input.style.position = 'absolute';
    input.style.left = `${rect.left}px`;
    input.style.top = `${rect.top}px`;
    input.style.fontSize = getComputedStyle(textElement).fontSize;
    input.style.fontFamily = getComputedStyle(textElement).fontFamily;
    input.style.border = '1px solid #007bff';
    input.style.padding = '2px';
    input.style.background = 'white';
    input.style.zIndex = '1000';

    document.body.appendChild(input);

    input.addEventListener('blur', () => {
      const newText = input.value;
      textElement.textContent = newText;
      setHistory((prev) => [
        ...prev,
        { entityId: textElement.id, transform: '', text: newText },
      ]);
      input.remove();
      updateTextContainer(textElement);
      updateArrows();
    });

    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        const newText = input.value;
        textElement.textContent = newText;
        setHistory((prev) => [
          ...prev,
          { entityId: textElement.id, transform: '', text: newText },
        ]);
        input.remove();
        updateTextContainer(textElement);
        updateArrows();
      }
    });

    input.focus();
    input.select();
    e.stopPropagation();
  };

  const resetPositions = () => {
    entities.forEach((entity) => {
      const element = svgRef.current?.querySelector(`#${entity.id}`);
      if (element) {
        element.setAttribute('transform', entity.transform);
      }
    });
    const paths = svgRef.current?.querySelectorAll('.relationshipLine');
    if (paths) {
      paths.forEach((path) => {
        const startId = path.getAttribute('data-start');
        const endId = path.getAttribute('data-end');
        const startEntity = svgRef.current?.querySelector(`#${startId}`);
        const endEntity = svgRef.current?.querySelector(`#${endId}`);
        if (startEntity && endEntity) {
          const startCTM = startEntity.getCTM();
          const endCTM = endEntity.getCTM();
          const startBBox = startEntity.getBBox();
          const endBBox = endEntity.getBBox();
          if (startCTM && endCTM) {
            const startPoint = svgRef.current!.createSVGPoint();
            startPoint.x = startBBox.x + startBBox.width;
            startPoint.y = startBBox.y + startBBox.height / 2;
            const transformedStart = startPoint.matrixTransform(startCTM);

            const endPoint = svgRef.current!.createSVGPoint();
            endPoint.x = endBBox.x;
            endPoint.y = endBBox.y + endBBox.height / 2;
            const transformedEnd = endPoint.matrixTransform(endCTM);

            path.setAttribute('d', `M${transformedStart.x},${transformedStart.y} L${transformedEnd.x},${transformedEnd.y}`);
          }
        }
      });
    }
    panZoomInstance?.reset();
    setHistory([]);
    updateArrows();
  };

  const undo = () => {
    if (history.length === 0) return;

    const lastAction = { ...history[history.length - 1] };
    setHistory((prev) => prev.slice(0, -1));

    if (lastAction.text) {
      const textElement = svgRef.current?.querySelector(`#${lastAction.entityId}`) as SVGTextElement;
      if (textElement) {
        const previousAction = history
          .slice(0, -1)
          .reverse()
          .find((action) => action.entityId === lastAction.entityId && action.text);
        textElement.textContent = previousAction?.text || entities.find((e) => e.id === lastAction.entityId)?.transform || '';
        updateTextContainer(textElement);
      }
    } else {
      const element = svgRef.current?.querySelector(`#${lastAction.entityId}`);
      if (element) {
        const previousAction = history
          .slice(0, -1)
          .reverse()
          .find((action) => action.entityId === lastAction.entityId && !action.text);
        element.setAttribute('transform', previousAction?.transform || entities.find((e) => e.id === lastAction.entityId)?.transform || '');
      }
    }
    updateArrows();
  };

  const zoomIn = () => panZoomInstance?.zoomIn();
  const zoomOut = () => panZoomInstance?.zoomOut();

  const updateTextContainer = (textElement: SVGTextElement) => {
    const parent = textElement.parentElement;
    if (parent) {
      const textBBox = textElement.getBBox();
      const rect = parent.querySelector('rect');
      if (rect) {
        rect.setAttribute('width', (Math.max(textBBox.width + 10, 100)).toString()); // Minimum width to prevent shrinking
        rect.setAttribute('height', (textBBox.height + 10).toString());
        const translateMatch = textElement.getAttribute('transform')?.match(/translate\(([^,]+),([^)]+)\)/);
        if (translateMatch) {
          const x = parseFloat(translateMatch[1]) - textBBox.width / 2 + 5;
          const y = parseFloat(translateMatch[2]) - textBBox.height / 2 + 5;
          rect.setAttribute('x', x.toString());
          rect.setAttribute('y', y.toString());
        }
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [selectedElement, startPos, panZoomInstance]);

  return (
    <header className="bg-gray-500 p-4 h-full flex flex-col">
      <div id="controls" className="flex space-x-2 mb-4">
        <button
          onClick={resetPositions}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Reset Positions
        </button>
        <button
          onClick={zoomIn}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Zoom In
        </button>
        <button
          onClick={zoomOut}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Zoom Out
        </button>
        <button
          onClick={undo}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          disabled={history.length === 0}
        >
          Undo
        </button>
      </div>
      <div id="diagram-container" ref={containerRef} className="w-full h-full overflow-auto">
        <svg
          aria-roledescription="er"
          role="graphics-document document"
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
          style={{ cursor: 'move' }}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          id="mermaid-diagram"
          ref={svgRef}
        >
          <g>
            <g
              transform="translate(648.744140625,20)"
              id="entity-vendortypes-95c0116f-f050-501b-933c-448089419a29"
              className="draggable"
              onMouseDown={handleMouseDown}
            >
              <rect height="75" width="102.966796875" y="0" x="0" className="er entityBox" />
              <text
                style={{ dominantBaseline: 'middle', textAnchor: 'middle', fontSize: '18px' }}
                transform="translate(51.4833984375,37.5)"
                y="0"
                x="0"
                id="text-entity-vendortypes-95c0116f-f050-501b-933c-448089419a29"
                className="er entityLabel editable-text"
                onDoubleClick={handleDoubleClick}
              >
                vendor_types
              </text>
            </g>
            <g
              transform="translate(650.2275390625,195)"
              id="entity-vendors-9dba8930-bee4-5b28-b870-7292f04b65fb"
              className="draggable"
              onMouseDown={handleMouseDown}
            >
              <rect height="75" width="100" y="0" x="0" className="er entityBox" />
              <text
                style={{ dominantBaseline: 'middle', textAnchor: 'middle', fontSize: '18px' }}
                transform="translate(50,37.5)"
                y="0"
                x="0"
                id="text-entity-vendors-9dba8930-bee4-5b28-b870-7292f04b65fb"
                className="er entityLabel editable-text"
                onDoubleClick={handleDoubleClick}
              >
                vendors
              </text>
            </g>
            <g
              transform="translate(280.06884765625,370)"
              id="entity-branches-fae9b09a-fac5-5de7-85f2-bdb01dd1c03c"
              className="draggable"
              onMouseDown={handleMouseDown}
            >
              <rect height="75" width="100" y="0" x="0" className="er entityBox" />
              <text
                style={{ dominantBaseline: 'middle', textAnchor: 'middle', fontSize: '18px' }}
                transform="translate(50,37.5)"
                y="0"
                x="0"
                id="text-entity-branches-fae9b09a-fac5-5de7-85f2-bdb01dd1c03c"
                className="er entityLabel editable-text"
                onDoubleClick={handleDoubleClick}
              >
                branches
              </text>
            </g>
            <g
              transform="translate(220,545)"
              id="entity-products-ce7ac559-5ef1-5445-aa6b-0190aa04e35c"
              className="draggable"
              onMouseDown={handleMouseDown}
            >
              <rect height="75" width="100" y="0" x="0" className="er entityBox" />
              <text
                style={{ dominantBaseline: 'middle', textAnchor: 'middle', fontSize: '18px' }}
                transform="translate(50,37.5)"
                y="0"
                x="0"
                id="text-entity-products-ce7ac559-5ef1-5445-aa6b-0190aa04e35c"
                className="er entityLabel editable-text"
                onDoubleClick={handleDoubleClick}
              >
                products
              </text>
            </g>
            <g
              transform="translate(530.455078125,370)"
              id="entity-orders-b199f09d-589f-57c9-bdcc-48b896df9a97"
              className="draggable"
              onMouseDown={handleMouseDown}
            >
              <rect height="75" width="100" y="0" x="0" className="er entityBox" />
              <text
                style={{ dominantBaseline: 'middle', textAnchor: 'middle', fontSize: '18px' }}
                transform="translate(50,37.5)"
                y="0"
                x="0"
                id="text-entity-orders-b199f09d-589f-57c9-bdcc-48b896df9a97"
                className="er entityLabel editable-text"
                onDoubleClick={handleDoubleClick}
              >
                orders
              </text>
            </g>
            <g
              transform="translate(1010.28955078125,195)"
              id="entity-customers-81c4bf60-f037-5ffd-bea1-c082debbd530"
              className="draggable"
              onMouseDown={handleMouseDown}
            >
              <rect height="75" width="100" y="0" x="0" className="er entityBox" />
              <text
                style={{ dominantBaseline: 'middle', textAnchor: 'middle', fontSize: '18px' }}
                transform="translate(50,37.5)"
                y="0"
                x="0"
                id="text-entity-customers-81c4bf60-f037-5ffd-bea1-c082debbd530"
                className="er entityLabel editable-text"
                onDoubleClick={handleDoubleClick}
              >
                customers
              </text>
            </g>
            <g
              transform="translate(420,720)"
              id="entity-productvariants-7fafc90b-2535-5689-a735-48151ab4b62c"
              className="draggable"
              onMouseDown={handleMouseDown}
            >
              <rect height="75" width="120.91015625" y="0" x="0" className="er entityBox" />
              <text
                style={{ dominantBaseline: 'middle', textAnchor: 'middle', fontSize: '18px' }}
                transform="translate(60.455078125,37.5)"
                y="0"
                x="0"
                id="text-entity-productvariants-7fafc90b-2535-5689-a735-48151ab4b62c"
                className="er entityLabel editable-text"
                onDoubleClick={handleDoubleClick}
              >
                product_variants
              </text>
            </g>
            <g
              transform="translate(220,720)"
              id="entity-reviews-07e8ceed-bbdb-5dac-a966-de460973a3a3"
              className="draggable"
              onMouseDown={handleMouseDown}
            >
              <rect height="75" width="100" y="0" x="0" className="er entityBox" />
              <text
                style={{ dominantBaseline: 'middle', textAnchor: 'middle', fontSize: '18px' }}
                transform="translate(50,37.5)"
                y="0"
                x="0"
                id="text-entity-reviews-07e8ceed-bbdb-5dac-a966-de460973a3a3"
                className="er entityLabel editable-text"
                onDoubleClick={handleDoubleClick}
              >
                reviews
              </text>
            </g>
            <g
              transform="translate(20,720)"
              id="entity-categories-a09d50f2-ac74-5856-9390-f2cc9b07f93b"
              className="draggable"
              onMouseDown={handleMouseDown}
            >
              <rect height="75" width="100" y="0" x="0" className="er entityBox" />
              <text
                style={{ dominantBaseline: 'middle', textAnchor: 'middle', fontSize: '18px' }}
                transform="translate(50,37.5)"
                y="0"
                x="0"
                id="text-entity-categories-a09d50f2-ac74-5856-9390-f2cc9b07f93b"
                className="er entityLabel editable-text"
                onDoubleClick={handleDoubleClick}
              >
                categories
              </text>
            </g>
            <g
              transform="translate(479.6826171875,545)"
              id="entity-orderdetails-fa49f844-fe59-53a9-970a-a09d2ded143e"
              className="draggable"
              onMouseDown={handleMouseDown}
            >
              <rect height="75" width="101.544921875" y="0" x="0" className="er entityBox" />
              <text
                style={{ dominantBaseline: 'middle', textAnchor: 'middle', fontSize: '18px' }}
                transform="translate(50.7724609375,37.5)"
                y="0"
                x="0"
                id="text-entity-orderdetails-fa49f844-fe59-53a9-970a-a09d2ded143e"
                className="er entityLabel editable-text"
                onDoubleClick={handleDoubleClick}
              >
                order_details
              </text>
            </g>
            <g
              transform="translate(1522.1171875,545)"
              id="entity-ordershipping-f9e02d63-3dec-518c-a343-352fddd75314"
              className="draggable"
              onMouseDown={handleMouseDown}
            >
              <rect height="75" width="109.5" y="0" x="0" className="er entityBox" />
              <text
                style={{ dominantBaseline: 'middle', textAnchor: 'middle', fontSize: '18px' }}
                transform="translate(54.75,37.5)"
                y="0"
                x="0"
                id="text-entity-ordershipping-f9e02d63-3dec-518c-a343-352fddd75314"
                className="er entityLabel editable-text"
                onDoubleClick={handleDoubleClick}
              >
                order_shipping
              </text>
            </g>
            <g
              transform="translate(1543.87109375,370)"
              id="entity-shippingmethods-50228f95-f004-56c3-ba25-b24f25c63c39"
              className="draggable"
              onMouseDown={handleMouseDown}
            >
              <rect height="75" width="126.447265625" y="0" x="0" className="er entityBox" />
              <text
                style={{ dominantBaseline: 'middle', textAnchor: 'middle', fontSize: '18px' }}
                transform="translate(63.2236328125,37.5)"
                y="0"
                x="0"
                id="text-entity-shippingmethods-50228f95-f004-56c3-ba25-b24f25c63c39"
                className="er entityLabel editable-text"
                onDoubleClick={handleDoubleClick}
              >
                shipping_methods
              </text>
            </g>
            <g
              transform="translate(730.455078125,370)"
              id="entity-transactions-a3d7e83a-4348-578f-b8ec-7c8b8dbef31a"
              className="draggable"
              onMouseDown={handleMouseDown}
            >
              <rect height="75" width="100" y="0" x="0" className="er entityBox" />
              <text
                style={{ dominantBaseline: 'middle', textAnchor: 'middle', fontSize: '18px' }}
                transform="translate(50,37.5)"
                y="0"
                x="0"
                id="text-entity-transactions-a3d7e83a-4348-578f-b8ec-7c8b8dbef31a"
                className="er entityLabel editable-text"
                onDoubleClick={handleDoubleClick}
              >
                transactions
              </text>
            </g>
            <g
              transform="translate(930.455078125,370)"
              id="entity-supporttickets-96b24458-e01b-5300-8216-12898a72dc6f"
              className="draggable"
              onMouseDown={handleMouseDown}
            >
              <rect height="75" width="113.416015625" y="0" x="0" className="er entityBox" />
              <text
                style={{ dominantBaseline: 'middle', textAnchor: 'middle', fontSize: '18px' }}
                transform="translate(56.7080078125,37.5)"
                y="0"
                x="0"
                id="text-entity-supporttickets-96b24458-e01b-5300-8216-12898a72dc6f"
                className="er entityLabel editable-text"
                onDoubleClick={handleDoubleClick}
              >
                support_tickets
              </text>
            </g>
            <g
              transform="translate(1143.87109375,370)"
              id="entity-notifications-1d6ba21a-15e0-5075-aad1-78bdfa7a7cea"
              className="draggable"
              onMouseDown={handleMouseDown}
            >
              <rect height="75" width="100" y="0" x="0" className="er entityBox" />
              <text
                style={{ dominantBaseline: 'middle', textAnchor: 'middle', fontSize: '18px' }}
                transform="translate(50,37.5)"
                y="0"
                x="0"
                id="text-entity-notifications-1d6ba21a-15e0-5075-aad1-78bdfa7a7cea"
                className="er entityLabel editable-text"
                onDoubleClick={handleDoubleClick}
              >
                notifications
              </text>
            </g>
            <g
              transform="translate(1343.87109375,370)"
              id="entity-analytics-ecbf835a-5501-5baf-b239-9b31d01edb0f"
              className="draggable"
              onMouseDown={handleMouseDown}
            >
              <rect height="75" width="100" y="0" x="0" className="er entityBox" />
              <text
                style={{ dominantBaseline: 'middle', textAnchor: 'middle', fontSize: '18px' }}
                transform="translate(50,37.5)"
                y="0"
                x="0"
                id="text-entity-analytics-ecbf835a-5501-5baf-b239-9b31d01edb0f"
                className="er entityLabel editable-text"
                onDoubleClick={handleDoubleClick}
              >
                analytics
              </text>
            </g>
          </g>
          <defs>
            <marker orient="auto" markerHeight="10" markerWidth="10" refY="5" refX="0" id="MD_PARENT_START">
              <path d="M 9,5 L4,9 L4,1 Z" />
            </marker>
            <marker orient="auto" markerHeight="10" markerWidth="10" refY="5" refX="9" id="MD_PARENT_END">
              <path d="M 9,5 L4,9 L4,1 Z" />
            </marker>
            <marker orient="auto" markerHeight="10" markerWidth="10" refY="5" refX="0" id="ONLY_ONE_START">
              <path d="M5,0 L5,10 M7,0 L7,10" fill="none" stroke="gray" />
            </marker>
            <marker orient="auto" markerHeight="10" markerWidth="10" refY="5" refX="10" id="ONLY_ONE_END">
              <path d="M3,0 L3,10 M5,0 L5,10" fill="none" stroke="gray" />
            </marker>
            <marker orient="auto" markerHeight="10" markerWidth="15" refY="5" refX="0" id="ZERO_OR_ONE_START">
              <circle r="3" cy="5" cx="12" fill="white" stroke="gray" />
              <path d="M5,0 L5,10" fill="none" stroke="gray" />
            </marker>
            <marker orient="auto" markerHeight="10" markerWidth="15" refY="5" refX="15" id="ZERO_OR_ONE_END">
              <circle r="3" cy="5" cx="3" fill="white" stroke="gray" />
              <path d="M10,0 L10,10" fill="none" stroke="gray" />
            </marker>
            <marker orient="auto" markerHeight="15" markerWidth="15" refY="7.5" refX="7.5" id="ONE_OR_MORE_START">
              <path d="M0,7.5 Q7.5,0 15,7.5 Q7.5,15 0,7.5 M17,5 L17,10" fill="none" stroke="gray" />
            </marker>
            <marker orient="auto" markerHeight="15" markerWidth="15" refY="7.5" refX="7.5" id="ONE_OR_MORE_END">
              <path d="M2.5,5 L2.5,10 M7.5,7.5 Q0,0 15,7.5 Q0,15 7.5,7.5" fill="none" stroke="gray" />
            </marker>
            <marker orient="auto" markerHeight="15" markerWidth="20" refY="7.5" refX="7.5" id="ZERO_OR_MORE_START">
              <circle r="3" cy="7.5" cx="17" fill="white" stroke="gray" />
              <path d="M0,7.5 Q7.5,0 15,7.5 Q7.5,15 0,7.5" fill="none" stroke="gray" />
            </marker>
            <marker orient="auto" markerHeight="15" markerWidth="20" refY="7.5" refX="12.5" id="ZERO_OR_MORE_END">
              <circle r="3" cy="7.5" cx="2.5" fill="white" stroke="gray" />
              <path d="M5,7.5 Q12.5,0 20,7.5 Q12.5,15 5,7.5" fill="none" stroke="gray" />
            </marker>
          </defs>
          <path
            style={{ stroke: 'gray', fill: 'none' }}
            markerStart="url(#ONLY_ONE_START)"
            markerEnd="url(#ZERO_OR_MORE_END)"
            d="M700.228,95L700.228,195"
            className="er relationshipLine"
            data-start="entity-vendortypes-95c0116f-f050-501b-933c-448089419a29"
            data-end="entity-vendors-9dba8930-bee4-5b28-b870-7292f04b65fb"
            id="path-rel1"
          />
          <rect height="14" width="39.189453125" y="138" x="680.63330078125" className="er relationshipLabelBox" />
          <text
            style={{ textAnchor: 'middle', dominantBaseline: 'middle', fontSize: '12px' }}
            y="145"
            x="700.22802734375"
            id="rel1"
            className="er relationshipLabel editable-text"
            onDoubleClick={handleDoubleClick}
          >
            defines
          </text>
          <path
            style={{ stroke: 'gray', fill: 'none' }}
            markerStart="url(#ONLY_ONE_START)"
            markerEnd="url(#ZERO_OR_MORE_END)"
            d="M650.228,244.319L330.069,370"
            className="er relationshipLine"
            data-start="entity-vendors-9dba8930-bee4-5b28-b870-7292f04b65fb"
            data-end="entity-branches-fae9b09a-fac5-5de7-85f2-bdb01dd1c03c"
            id="path-rel2"
          />
          <rect height="14" width="17.861328125" y="280.04119873046875" x="466.7681579589844" className="er relationshipLabelBox" />
          <text
            style={{ textAnchor: 'middle', dominantBaseline: 'middle', fontSize: '12px' }}
            y="287.04119873046875"
            x="475.6988220214844"
            id="rel2"
            className="er relationshipLabel editable-text"
            onDoubleClick={handleDoubleClick}
          >
            has
          </text>
          <path
            style={{ stroke: 'gray', fill: 'none' }}
            markerStart="url(#ONLY_ONE_START)"
            markerEnd="url(#ZERO_OR_MORE_END)"
            d="M650.228,240.104L220,545"
            className="er relationshipLine"
            data-start="entity-vendors-9dba8930-bee4-5b28-b870-7292f04b65fb"
            data-end="entity-products-ce7ac559-5ef1-5445-aa6b-0190aa04e35c"
            id="path-rel3"
          />
          <rect height="14" width="39.7578125" y="298.21832275390625" x="252.2799072265625" className="er relationshipLabelBox" />
          <text
            style={{ textAnchor: 'middle', dominantBaseline: 'middle', fontSize: '12px' }}
            y="305.21832275390625"
            x="272.1588134765625"
            id="rel3"
            className="er relationshipLabel editable-text"
            onDoubleClick={handleDoubleClick}
          >
            creates
          </text>
          <path
            style={{ stroke: 'gray', fill: 'none' }}
            markerStart="url(#ONLY_ONE_START)"
            markerEnd="url(#ZERO_OR_MORE_END)"
            d="M330.069,445L330.069,545"
            className="er relationshipLine"
            data-start="entity-branches-fae9b09a-fac5-5de7-85f2-bdb01dd1c03c"
            data-end="entity-orders-b199f09d-589f-57c9-bdcc-48b896df9a97"
            id="path-rel4"
          />
          <rect height="14" width="27.611328125" y="491.37823486328125" x="309.3067321777344" className="er relationshipLabelBox" />
          <text
            style={{ textAnchor: 'middle', dominantBaseline: 'middle', fontSize: '12px' }}
            y="498.37823486328125"
            x="323.1123962402344"
            id="rel4"
            className="er relationshipLabel editable-text"
            onDoubleClick={handleDoubleClick}
          >
            hosts
          </text>
          <path
            style={{ stroke: 'gray', fill: 'none' }}
            markerStart="url(#ONLY_ONE_START)"
            markerEnd="url(#ZERO_OR_MORE_END)"
            d="M650.228,252.372L530.455,370"
            className="er relationshipLine"
            data-start="entity-vendors-9dba8930-bee4-5b28-b870-7292f04b65fb"
            data-end="entity-orders-b199f09d-589f-57c9-bdcc-48b896df9a97"
            id="path-rel5"
          />
          <rect height="14" width="46.6953125" y="287.3406982421875" x="528.6306762695312" className="er relationshipLabelBox" />
          <text
            style={{ textAnchor: 'middle', dominantBaseline: 'middle', fontSize: '12px' }}
            y="294.3406982421875"
            x="551.9783325195312"
            id="rel5"
            className="er relationshipLabel editable-text"
            onDoubleClick={handleDoubleClick}
          >
            manages
          </text>
          <path
            style={{ stroke: 'gray', fill: 'none' }}
            markerStart="url(#ONLY_ONE_START)"
            markerEnd="url(#ZERO_OR_MORE_END)"
            d="M1010.29,242.678L530.455,370"
            className="er relationshipLine"
            data-start="entity-customers-81c4bf60-f037-5ffd-bea1-c082debbd530"
            data-end="entity-orders-b199f09d-589f-57c9-bdcc-48b896df9a97"
            id="path-rel6"
          />
          <rect height="14" width="34.015625" y="280.48590087890625" x="780.168701171875" className="er relationshipLabelBox" />
          <text
            style={{ textAnchor: 'middle', dominantBaseline: 'middle', fontSize: '12px' }}
            y="287.48590087890625"
            x="797.176513671875"
            id="rel6"
            className="er relationshipLabel editable-text"
            onDoubleClick={handleDoubleClick}
          >
            places
          </text>
          <path
            style={{ stroke: 'gray', fill: 'none' }}
            markerStart="url(#ONLY_ONE_START)"
            markerEnd="url(#ZERO_OR_MORE_END)"
            d="M320,610.684L420,720"
            className="er relationshipLine"
            data-start="entity-products-ce7ac559-5ef1-5445-aa6b-0190aa04e35c"
            data-end="entity-productvariants-7fafc90b-2535-5689-a735-48151ab4b62c"
            id="path-rel7"
          />
          <rect height="14" width="17.861328125" y="649.1848754882812" x="387.310546875" className="er relationshipLabelBox" />
          <text
            style={{ textAnchor: 'middle', dominantBaseline: 'middle', fontSize: '12px' }}
            y="656.1848754882812"
            x="396.2412109375"
            id="rel7"
            className="er relationshipLabel editable-text"
            onDoubleClick={handleDoubleClick}
          >
            has
          </text>
          <path
            style={{ stroke: 'gray', fill: 'none' }}
            markerStart="url(#ONLY_ONE_START)"
            markerEnd="url(#ZERO_OR_MORE_END)"
            d="M270,620L270,720"
            className="er relationshipLine"
            data-start="entity-products-ce7ac559-5ef1-5445-aa6b-0190aa04e35c"
            data-end="entity-reviews-07e8ceed-bbdb-5dac-a966-de460973a3a3"
            id="path-rel8"
          />
          <rect height="14" width="44.5390625" y="663" x="247.73046875" className="er relationshipLabelBox" />
          <text
            style={{ textAnchor: 'middle', dominantBaseline: 'middle', fontSize: '12px' }}
            y="670"
            x="270"
            id="rel8"
            className="er relationshipLabel editable-text"
            onDoubleClick={handleDoubleClick}
          >
            receives
          </text>
          <path
            style={{ stroke: 'gray', fill: 'none' }}
            markerStart="url(#ZERO_OR_MORE_START)"
            markerEnd="url(#ONLY_ONE_END)"
            d="M220,604.375L20,720"
            className="er relationshipLine"
            data-start="entity-products-ce7ac559-5ef1-5445-aa6b-0190aa04e35c"
            data-end="entity-categories-a09d50f2-ac74-5856-9390-f2cc9b07f93b"
            id="path-rel9"
          />
          <rect height="14" width="40.7890625" y="639.6575927734375" x="108.14015197753906" className="er relationshipLabelBox" />
          <text
            style={{ textAnchor: 'middle', dominantBaseline: 'middle', fontSize: '12px' }}
            y="646.6575927734375"
            x="128.53468322753906"
            id="rel9"
            className="er relationshipLabel editable-text"
            onDoubleClick={handleDoubleClick}
          >
            belongs
          </text>
          <path
            style={{ stroke: 'gray', fill: 'none' }}
            markerStart="url(#ONLY_ONE_START)"
            markerEnd="url(#ZERO_OR_MORE_END)"
            d="M559.027,445L530.455,545"
            className="er relationshipLine"
            data-start="entity-orders-b199f09d-589f-57c9-bdcc-48b896df9a97"
            data-end="entity-orderdetails-fa49f844-fe59-53a9-970a-a09d2ded143e"
            id="path-rel10"
          />
          <rect height="14" width="44.978515625" y="485.55267333984375" x="513.4605102539062" className="er relationshipLabelBox" />
          <text
            style={{ textAnchor: 'middle', dominantBaseline: 'middle', fontSize: '12px' }}
            y="492.55267333984375"
            x="535.9497680664062"
            id="rel10"
            className="er relationshipLabel editable-text"
            onDoubleClick={handleDoubleClick}
          >
            contains
          </text>
          <path
            style={{ stroke: 'gray', fill: 'none' }}
            markerStart="url(#ZERO_OR_MORE_START)"
            markerEnd="url(#ONLY_ONE_END)"
            d="M530.455,620L730.455,370"
            className="er relationshipLine"
            data-start="entity-orders-b199f09d-589f-57c9-bdcc-48b896df9a97"
            data-end="entity-transactions-a3d7e83a-4348-578f-b8ec-7c8b8dbef31a"
            id="path-rel11"
          />
          <rect height="14" width="44.24609375" y="665.447021484375" x="502.8370361328125" className="er relationshipLabelBox" />
          <text
            style={{ textAnchor: 'middle', dominantBaseline: 'middle', fontSize: '12px' }}
            y="672.447021484375"
            x="524.9600830078125"
            id="rel11"
            className="er relationshipLabel editable-text"
            onDoubleClick={handleDoubleClick}
          >
            includes
          </text>
          <path
            style={{ stroke: 'gray', fill: 'none' }}
            markerStart="url(#ONLY_ONE_START)"
            markerEnd="url(#ONLY_ONE_END)"
            d="M630.455,416.943L1522.117,545"
            className="er relationshipLine"
            data-start="entity-orders-b199f09d-589f-57c9-bdcc-48b896df9a97"
            data-end="entity-ordershipping-f9e02d63-3dec-518c-a343-352fddd75314"
            id="path-rel12"
          />
          <rect height="14" width="22.958984375" y="491.7571716308594" x="1064.185791015625" className="er relationshipLabelBox" />
          <text
            style={{ textAnchor: 'middle', dominantBaseline: 'middle', fontSize: '12px' }}
            y="498.7571716308594"
            x="1075.665283203125"
            id="rel12"
            className="er relationshipLabel editable-text"
            onDoubleClick={handleDoubleClick}
          >
            uses
          </text>
          <path
            style={{ stroke: 'gray', fill: 'none' }}
            markerStart="url(#ONLY_ONE_START)"
            markerEnd="url(#ZERO_OR_MORE_END)"
            d="M1607.095,445L1589.822,545"
            className="er relationshipLine"
            data-start="entity-shippingmethods-50228f95-f004-56c3-ba25-b24f25c63c39"
            data-end="entity-ordershipping-f9e02d63-3dec-518c-a343-352fddd75314"
            id="path-rel13"
          />
          <rect height="14" width="45.318359375" y="488.9556579589844" x="1581.38818359375" className="er relationshipLabelBox" />
          <text
            style={{ textAnchor: 'middle', dominantBaseline: 'middle', fontSize: '12px' }}
            y="495.9556579589844"
            x="1604.04736328125"
            id="rel13"
            className="er relationshipLabel editable-text"
            onDoubleClick={handleDoubleClick}
          >
            provides
          </text>
          <path
            style={{ stroke: 'gray', fill: 'none' }}
            markerStart="url(#ONLY_ONE_START)"
            markerEnd="url(#ZERO_OR_MORE_END)"
            d="M734.611,270L780.455,370"
            className="er relationshipLine"
            data-start="entity-orders-b199f09d-589f-57c9-bdcc-48b896df9a97"
            data-end="entity-supporttickets-96b24458-e01b-5300-8216-12898a72dc6f"
            id="path-rel14"
          />
          <rect height="14" width="52.94140625" y="307.5867614746094" x="743.6066284179688" className="er relationshipLabelBox" />
          <text
            style={{ textAnchor: 'middle', dominantBaseline: 'middle', fontSize: '12px' }}
            y="314.5867614746094"
            x="770.0773315429688"
            id="rel14"
            className="er relationshipLabel editable-text"
            onDoubleClick={handleDoubleClick}
          >
            generates
          </text>
          <path
            style={{ stroke: 'gray', fill: 'none' }}
            markerStart="url(#ONLY_ONE_START)"
            markerEnd="url(#ZERO_OR_MORE_END)"
            d="M750.228,251.23L964.297,370"
            className="er relationshipLine"
            data-start="entity-orders-b199f09d-589f-57c9-bdcc-48b896df9a97"
            data-end="entity-notifications-1d6ba21a-15e0-5075-aad1-78bdfa7a7cea"
            id="path-rel15"
          />
          <rect height="14" width="41.1875" y="289.7047119140625" x="845.8914794921875" className="er relationshipLabelBox" />
          <text
            style={{ textAnchor: 'middle', dominantBaseline: 'middle', fontSize: '12px' }}
            y="296.7047119140625"
            x="866.4852294921875"
            id="rel15"
            className="er relationshipLabel editable-text"
            onDoubleClick={handleDoubleClick}
          >
            handles
          </text>
          <path
            style={{ stroke: 'gray', fill: 'none' }}
            markerStart="url(#ONLY_ONE_START)"
            markerEnd="url(#ZERO_OR_MORE_END)"
            d="M1051.816,270L1010.029,370"
            className="er relationshipLine"
            data-start="entity-customers-81c4bf60-f037-5ffd-bea1-c082debbd530"
            data-end="entity-notifications-1d6ba21a-15e0-5075-aad1-78bdfa7a7cea"
            id="path-rel16"
          />
          <rect height="14" width="39.7578125" y="315.24749755859375" x="1016.4814453125" className="er relationshipLabelBox" />
          <text
            style={{ textAnchor: 'middle', dominantBaseline: 'middle', fontSize: '12px' }}
            y="322.24749755859375"
            x="1036.3603515625"
            id="rel16"
            className="er relationshipLabel editable-text"
            onDoubleClick={handleDoubleClick}
          >
            creates
          </text>
          <path
            style={{ stroke: 'gray', fill: 'none' }}
            markerStart="url(#ONLY_ONE_START)"
            markerEnd="url(#ZERO_OR_MORE_END)"
            d="M1110.29,265.252L1193.871,370"
            className="er relationshipLine"
            data-start="entity-customers-81c4bf60-f037-5ffd-bea1-c082debbd530"
            data-end="entity-analytics-ecbf835a-5501-5baf-b239-9b31d01edb0f"
            id="path-rel17"
          />
          <rect height="14" width="44.5390625" y="299.7839050292969" x="1145.7777099609375" className="er relationshipLabelBox" />
          <text
            style={{ textAnchor: 'middle', dominantBaseline: 'middle', fontSize: '12px' }}
            y="306.7839050292969"
            x="1168.0472412109375"
            id="rel17"
            className="er relationshipLabel editable-text"
            onDoubleClick={handleDoubleClick}
          >
            receives
          </text>
          <path
            style={{ stroke: 'gray', fill: 'none' }}
            markerStart="url(#ONLY_ONE_START)"
            markerEnd="url(#ZERO_OR_MORE_END)"
            d="M750.228,238.807L1393.871,370"
            className="er relationshipLine"
            data-start="entity-orders-b199f09d-589f-57c9-bdcc-48b896df9a97"
            data-end="entity-analytics-ecbf835a-5501-5baf-b239-9b31d01edb0f"
            id="path-rel18"
          />
          <rect height="14" width="32.720703125" y="275.08135986328125" x="1067.3797607421875" className="er relationshipLabelBox" />
          <text
            style={{ textAnchor: 'middle', dominantBaseline: 'middle', fontSize: '12px' }}
            y="282.08135986328125"
            x="1083.7401123046875"
            id="rel18"
            className="er relationshipLabel editable-text"
            onDoubleClick={handleDoubleClick}
          >
            tracks
          </text>
        </svg>
      </div>
    </header>
  );
};

export default Diagram;