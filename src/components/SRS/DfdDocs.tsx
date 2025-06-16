const DfdDocs = () => {
  return (
   <div className="summary">
      <h6>E-Commerce System Entity Relationship Diagram Summary</h6>

      <div className="entity">
        <h3>Core Entities and Relationships</h3>

        <div className="relationship">
          <h4>Vendors</h4>
          <p>
            Central entity in the system interconnected with multiple other
            entities
          </p>
          <div className="relationship-item">Define vendor types</div>
          <div className="relationship-item">Create branches</div>
          <div className="relationship-item">Generate products</div>
          <div className="relationship-item">Manage orders</div>
          <div className="relationship-item">Track transactions</div>
          <div className="relationship-item">Handle support tickets</div>
          <div className="relationship-item">Generate analytics</div>
        </div>

        <div className="relationship">
          <h4>Customers</h4>
          <p>
            Key actors in the system who interact with the platform through:
          </p>
          <div className="relationship-item">Placing orders</div>
          <div className="relationship-item">Creating support tickets</div>
          <div className="relationship-item">Receiving notifications</div>
        </div>
      </div>

      <div className="entity">
        <h3>Business Flow Relationships</h3>

        <div className="relationship">
          <h4>Product Management</h4>
          <p>Products are:</p>
          <div className="relationship-item">Created by vendors</div>
          <div className="relationship-item">Hosted in branches</div>
          <div className="relationship-item">Associated with categories</div>
          <div className="relationship-item">
            Contain multiple product variants
          </div>
          <div className="relationship-item">Receive customer reviews</div>
        </div>

        <div className="relationship">
          <h4>Order Processing</h4>
          <p>Orders:</p>
          <div className="relationship-item">Placed by customers</div>
          <div className="relationship-item">Managed by vendors</div>
          <div className="relationship-item">Contain order details</div>
          <div className="relationship-item">
            Associated with specific order shipping
          </div>
          <div className="relationship-item">Use shipping methods</div>
        </div>
      </div>

      <div className="entity">
        <h3>Support and Tracking</h3>

        <div className="relationship">
          <h4>Support System</h4>
          <p>Support tickets:</p>
          <div className="relationship-item">Created by customers</div>
          <div className="relationship-item">Handled by vendors</div>
        </div>

        <div className="relationship">
          <h4>Notifications</h4>
          <p>Customers receive notifications about various activities</p>
        </div>
      </div>

      <div className="entity">
        <h3>Key Relationship Types</h3>
        <div className="relationship-item">||--o: One-to-many relationship</div>
        <div className="relationship-item">o--||: Many-to-one relationship</div>
        <div className="relationship-item">||--||: One-to-one relationship</div>
      </div>

      <p>
        This comprehensive diagram represents a complex e-commerce ecosystem
        with interconnected entities and their relationships.
      </p>
    </div>
  )
}

export default DfdDocs
