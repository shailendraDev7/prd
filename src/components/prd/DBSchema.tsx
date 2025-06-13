import React from 'react';

const DBSchema: React.FC = () => {
  return (
    <div className="font-sans leading-relaxed text-gray-800 bg-gray-100 p-8 max-w-4xl mx-auto rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-blue-800 text-center mb-10 pb-4 border-b-2 border-blue-500">
        Amigo Estore Database Schema (MySQL)
      </h2>
      <p className="text-center mb-8 text-lg text-gray-600">
        This is the detailed database schema for a multivendor e-commerce Laravel project,
        specifically tailored for the Nepali context.
      </p>

      {/* Vendor Types Table */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-md">
        <h3 className="text-2xl font-semibold text-blue-700 mb-2 pb-1 border-b border-dashed border-blue-200">
          1. <code className="bg-gray-100 p-1 rounded">vendor_types</code> table
        </h3>
        <p className="italic text-gray-600 mb-5 pl-2 border-l-4 border-blue-400">
          Defines different categories of vendors (e.g., single_shop, multibranch_shop, wholesaler, shoe_brand).
        </p>
        <ul className="list-none p-0 m-0">
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">AUTO_INCREMENT PRIMARY KEY</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`name`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">VARCHAR(50)</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL UNIQUE</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`description`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">TEXT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`created_at`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">TIMESTAMP</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">DEFAULT CURRENT_TIMESTAMP</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`updated_at`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">TIMESTAMP</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP</span>
          </li>
        </ul>
      </div>

      {/* Vendors Table */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-md">
        <h3 className="text-2xl font-semibold text-blue-700 mb-2 pb-1 border-b border-dashed border-blue-200">
          2. <code className="bg-gray-100 p-1 rounded">vendors</code> table
        </h3>
        <p className="italic text-gray-600 mb-5 pl-2 border-l-4 border-blue-400">
          Stores information about individual vendors in the system.
        </p>
        <ul className="list-none p-0 m-0">
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">AUTO_INCREMENT PRIMARY KEY</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`vendor_type_id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`name`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">VARCHAR(255)</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`email`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">VARCHAR(255)</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">UNIQUE NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`password`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">VARCHAR(255)</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`shop_name`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">VARCHAR(255)</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`commission_rate`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">DECIMAL(5, 2)</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">DEFAULT 0.00</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`rating`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">DECIMAL(3, 2)</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">DEFAULT 0.00</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`branch_count`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">DEFAULT 1</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`created_at`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">TIMESTAMP</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">DEFAULT CURRENT_TIMESTAMP</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`updated_at`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">TIMESTAMP</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">FOREIGN KEY (`vendor_type_id`)</span>
            <span className="text-red-600 text-sm w-3/4 min-w-[120px] text-right">REFERENCES `vendor_types`(`id`) ON DELETE RESTRICT</span>
          </li>
        </ul>
      </div>

      {/* Branches Table */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-md">
        <h3 className="text-2xl font-semibold text-blue-700 mb-2 pb-1 border-b border-dashed border-blue-200">
          3. <code className="bg-gray-100 p-1 rounded">branches</code> table
        </h3>
        <p className="italic text-gray-600 mb-5 pl-2 border-l-4 border-blue-400">
          Stores information about different branches for multi-branch shops.
        </p>
        <ul className="list-none p-0 m-0">
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">AUTO_INCREMENT PRIMARY KEY</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`vendor_id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`name`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">VARCHAR(255)</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`address`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">TEXT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`contact_number`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">VARCHAR(20)</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`created_at`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">TIMESTAMP</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">DEFAULT CURRENT_TIMESTAMP</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`updated_at`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">TIMESTAMP</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">FOREIGN KEY (`vendor_id`)</span>
            <span className="text-red-600 text-sm w-3/4 min-w-[120px] text-right">REFERENCES `vendors`(`id`) ON DELETE CASCADE</span>
          </li>
        </ul>
      </div>

      {/* Users/Customers Table */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-md">
        <h3 className="text-2xl font-semibold text-blue-700 mb-2 pb-1 border-b border-dashed border-blue-200">
          4. <code className="bg-gray-100 p-1 rounded">customers</code> table
        </h3>
        <p className="italic text-gray-600 mb-5 pl-2 border-l-4 border-blue-400">
          Stores information about registered customers.
        </p>
        <ul className="list-none p-0 m-0">
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">AUTO_INCREMENT PRIMARY KEY</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`name`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">VARCHAR(255)</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`email`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">VARCHAR(255)</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">UNIQUE NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`password`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">VARCHAR(255)</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`wallet`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">DECIMAL(15, 2)</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">DEFAULT 0.00</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`created_at`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">TIMESTAMP</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">DEFAULT CURRENT_TIMESTAMP</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`updated_at`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">TIMESTAMP</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP</span>
          </li>
        </ul>
      </div>

      {/* Products Table */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-md">
        <h3 className="text-2xl font-semibold text-blue-700 mb-2 pb-1 border-b border-dashed border-blue-200">
          5. <code className="bg-gray-100 p-1 rounded">products</code> table
        </h3>
        <p className="italic text-gray-600 mb-5 pl-2 border-l-4 border-blue-400">
          Stores information about products sold by vendors.
        </p>
        <ul className="list-none p-0 m-0">
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">AUTO_INCREMENT PRIMARY KEY</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`vendor_id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`branch_id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">DEFAULT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`name`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">VARCHAR(255)</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`description`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">TEXT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`base_price`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">DECIMAL(15, 2)</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`stock`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`category_id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`created_at`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">TIMESTAMP</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">DEFAULT CURRENT_TIMESTAMP</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`updated_at`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">TIMESTAMP</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">FOREIGN KEY (`vendor_id`)</span>
            <span className="text-red-600 text-sm w-3/4 min-w-[120px] text-right">REFERENCES `vendors`(`id`) ON DELETE CASCADE</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">FOREIGN KEY (`branch_id`)</span>
            <span className="text-red-600 text-sm w-3/4 min-w-[120px] text-right">REFERENCES `branches`(`id`) ON DELETE SET NULL</span>
          </li>
        </ul>
      </div>

      {/* Product Variants Table */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-md">
        <h3 className="text-2xl font-semibold text-blue-700 mb-2 pb-1 border-b border-dashed border-blue-200">
          6. <code className="bg-gray-100 p-1 rounded">product_variants</code> table
        </h3>
        <p className="italic text-gray-600 mb-5 pl-2 border-l-4 border-blue-400">
          Defines different variants for a single product (e.g., size, color).
        </p>
        <ul className="list-none p-0 m-0">
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">AUTO_INCREMENT PRIMARY KEY</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`product_id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`variant_name`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">VARCHAR(50)</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`variant_value`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">VARCHAR(50)</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`price_adjustment`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">DECIMAL(15, 2)</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">DEFAULT 0.00</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`stock`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`created_at`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">TIMESTAMP</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">DEFAULT CURRENT_TIMESTAMP</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">FOREIGN KEY (`product_id`)</span>
            <span className="text-red-600 text-sm w-3/4 min-w-[120px] text-right">REFERENCES `products`(`id`) ON DELETE CASCADE</span>
          </li>
        </ul>
      </div>

      {/* Categories Table */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-md">
        <h3 className="text-2xl font-semibold text-blue-700 mb-2 pb-1 border-b border-dashed border-blue-200">
          7. <code className="bg-gray-100 p-1 rounded">categories</code> table
        </h3>
        <p className="italic text-gray-600 mb-5 pl-2 border-l-4 border-blue-400">
          Organizes products into different categories.
        </p>
        <ul className="list-none p-0 m-0">
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">AUTO_INCREMENT PRIMARY KEY</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`name`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">VARCHAR(255)</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`parent_id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">DEFAULT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`created_at`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">TIMESTAMP</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">DEFAULT CURRENT_TIMESTAMP</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`updated_at`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">TIMESTAMP</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">FOREIGN KEY (`parent_id`)</span>
            <span className="text-red-600 text-sm w-3/4 min-w-[120px] text-right">REFERENCES `categories`(`id`) ON DELETE SET NULL</span>
          </li>
        </ul>
      </div>

      {/* Orders Table */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-md">
        <h3 className="text-2xl font-semibold text-blue-700 mb-2 pb-1 border-b border-dashed border-blue-200">
          8. <code className="bg-gray-100 p-1 rounded">orders</code> table
        </h3>
        <p className="italic text-gray-600 mb-5 pl-2 border-l-4 border-blue-400">
          Records customer orders.
        </p>
        <ul className="list-none p-0 m-0">
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">AUTO_INCREMENT PRIMARY KEY</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`customer_id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`vendor_id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`branch_id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">DEFAULT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`status`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">VARCHAR(50)</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`total`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">DECIMAL(15, 2)</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`expected_delivery_date`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">DATE</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`created_at`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">TIMESTAMP</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">DEFAULT CURRENT_TIMESTAMP</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`updated_at`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">TIMESTAMP</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">FOREIGN KEY (`customer_id`)</span>
            <span className="text-red-600 text-sm w-3/4 min-w-[120px] text-right">REFERENCES `customers`(`id`) ON DELETE CASCADE</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">FOREIGN KEY (`vendor_id`)</span>
            <span className="text-red-600 text-sm w-3/4 min-w-[120px] text-right">REFERENCES `vendors`(`id`) ON DELETE CASCADE</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">FOREIGN KEY (`branch_id`)</span>
            <span className="text-red-600 text-sm w-3/4 min-w-[120px] text-right">REFERENCES `branches`(`id`) ON DELETE SET NULL</span>
          </li>
        </ul>
      </div>

      {/* Order Details Table */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-md">
        <h3 className="text-2xl font-semibold text-blue-700 mb-2 pb-1 border-b border-dashed border-blue-200">
          9. <code className="bg-gray-100 p-1 rounded">order_details</code> table
        </h3>
        <p className="italic text-gray-600 mb-5 pl-2 border-l-4 border-blue-400">
          Stores individual items within an order.
        </p>
        <ul className="list-none p-0 m-0">
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">AUTO_INCREMENT PRIMARY KEY</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`order_id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`product_id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`variant_id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">DEFAULT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`quantity`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`price`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">DECIMAL(15, 2)</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`created_at`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">TIMESTAMP</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">DEFAULT CURRENT_TIMESTAMP</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">FOREIGN KEY (`order_id`)</span>
            <span className="text-red-600 text-sm w-3/4 min-w-[120px] text-right">REFERENCES `orders`(`id`) ON DELETE CASCADE</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">FOREIGN KEY (`product_id`)</span>
            <span className="text-red-600 text-sm w-3/4 min-w-[120px] text-right">REFERENCES `products`(`id`) ON DELETE CASCADE</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">FOREIGN KEY (`variant_id`)</span>
            <span className="text-red-600 text-sm w-3/4 min-w-[120px] text-right">REFERENCES `product_variants`(`id`) ON DELETE SET NULL</span>
          </li>
        </ul>
      </div>

      {/* Transactions Table */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-md">
        <h3 className="text-2xl font-semibold text-blue-700 mb-2 pb-1 border-b border-dashed border-blue-200">
          10. <code className="bg-gray-100 p-1 rounded">transactions</code> table
        </h3>
        <p className="italic text-gray-600 mb-5 pl-2 border-l-4 border-blue-400">
          Records payment and other financial transactions related to orders.
        </p>
        <ul className="list-none p-0 m-0">
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">AUTO_INCREMENT PRIMARY KEY</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`order_id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`vendor_id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`amount`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">DECIMAL(15, 2)</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`payment_method`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">VARCHAR(50)</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`payment_details`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">TEXT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`status`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">VARCHAR(50)</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`created_at`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">TIMESTAMP</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">DEFAULT CURRENT_TIMESTAMP</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">FOREIGN KEY (`order_id`)</span>
            <span className="text-red-600 text-sm w-3/4 min-w-[120px] text-right">REFERENCES `orders`(`id`) ON DELETE CASCADE</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">FOREIGN KEY (`vendor_id`)</span>
            <span className="text-red-600 text-sm w-3/4 min-w-[120px] text-right">REFERENCES `vendors`(`id`) ON DELETE CASCADE</span>
          </li>
        </ul>
      </div>

      {/* Shipping Methods Table */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-md">
        <h3 className="text-2xl font-semibold text-blue-700 mb-2 pb-1 border-b border-dashed border-blue-200">
          11. <code className="bg-gray-100 p-1 rounded">shipping_methods</code> table
        </h3>
        <p className="italic text-gray-600 mb-5 pl-2 border-l-4 border-blue-400">
          Defines various available shipping methods.
        </p>
        <ul className="list-none p-0 m-0">
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">AUTO_INCREMENT PRIMARY KEY</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`name`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">VARCHAR(50)</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL UNIQUE</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`cost`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">DECIMAL(15, 2)</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`is_active`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">BOOLEAN</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">DEFAULT TRUE</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`created_at`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">TIMESTAMP</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">DEFAULT CURRENT_TIMESTAMP</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`updated_at`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">TIMESTAMP</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP</span>
          </li>
        </ul>
      </div>

      {/* Order Shipping Table */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-md">
        <h3 className="text-2xl font-semibold text-blue-700 mb-2 pb-1 border-b border-dashed border-blue-200">
          12. <code className="bg-gray-100 p-1 rounded">order_shipping</code> table
        </h3>
        <p className="italic text-gray-600 mb-5 pl-2 border-l-4 border-blue-400">
          Links orders to specific shipping methods and details.
        </p>
        <ul className="list-none p-0 m-0">
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">AUTO_INCREMENT PRIMARY KEY</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`order_id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL UNIQUE</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`shipping_method_id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`tracking_number`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">VARCHAR(50)</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`created_at`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">TIMESTAMP</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">DEFAULT CURRENT_TIMESTAMP</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">FOREIGN KEY (`order_id`)</span>
            <span className="text-red-600 text-sm w-3/4 min-w-[120px] text-right">REFERENCES `orders`(`id`) ON DELETE CASCADE</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">FOREIGN KEY (`shipping_method_id`)</span>
            <span className="text-red-600 text-sm w-3/4 min-w-[120px] text-right">REFERENCES `shipping_methods`(`id`) ON DELETE RESTRICT</span>
          </li>
        </ul>
      </div>

      {/* Notifications Table */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-md">
        <h3 className="text-2xl font-semibold text-blue-700 mb-2 pb-1 border-b border-dashed border-blue-200">
          13. <code className="bg-gray-100 p-1 rounded">notifications</code> table
        </h3>
        <p className="italic text-gray-600 mb-5 pl-2 border-l-4 border-blue-400">
          Stores various notifications for users.
        </p>
        <ul className="list-none p-0 m-0">
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">AUTO_INCREMENT PRIMARY KEY</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`user_id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`type`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">VARCHAR(50)</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`message`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">TEXT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`is_read`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">BOOLEAN</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">DEFAULT FALSE</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`created_at`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">TIMESTAMP</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">DEFAULT CURRENT_TIMESTAMP</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">FOREIGN KEY (`user_id`)</span>
            <span className="text-red-600 text-sm w-3/4 min-w-[120px] text-right">REFERENCES `customers`(`id`) ON DELETE CASCADE</span>
          </li>
        </ul>
      </div>

      {/* Analytics Table */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-md">
        <h3 className="text-2xl font-semibold text-blue-700 mb-2 pb-1 border-b border-dashed border-blue-200">
          14. <code className="bg-gray-100 p-1 rounded">analytics</code> table
        </h3>
        <p className="italic text-gray-600 mb-5 pl-2 border-l-4 border-blue-400">
          Stores data for system analytics and reporting.
        </p>
        <ul className="list-none p-0 m-0">
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">AUTO_INCREMENT PRIMARY KEY</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`vendor_id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`metric_type`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">VARCHAR(50)</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`value`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">DECIMAL(15, 2)</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`date_recorded`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">DATE</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`created_at`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">TIMESTAMP</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">DEFAULT CURRENT_TIMESTAMP</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">FOREIGN KEY (`vendor_id`)</span>
            <span className="text-red-600 text-sm w-3/4 min-w-[120px] text-right">REFERENCES `vendors`(`id`) ON DELETE CASCADE</span>
          </li>
        </ul>
      </div>

      {/* Reviews Table */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-md">
        <h3 className="text-2xl font-semibold text-blue-700 mb-2 pb-1 border-b border-dashed border-blue-200">
          15. <code className="bg-gray-100 p-1 rounded">reviews</code> table
        </h3>
        <p className="italic text-gray-600 mb-5 pl-2 border-l-4 border-blue-400">
          Stores customer reviews for products.
        </p>
        <ul className="list-none p-0 m-0">
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">AUTO_INCREMENT PRIMARY KEY</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`customer_id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`product_id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`rating`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`comment`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">TEXT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`created_at`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">TIMESTAMP</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">DEFAULT CURRENT_TIMESTAMP</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">FOREIGN KEY (`customer_id`)</span>
            <span className="text-red-600 text-sm w-3/4 min-w-[120px] text-right">REFERENCES `customers`(`id`) ON DELETE CASCADE</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">FOREIGN KEY (`product_id`)</span>
            <span className="text-red-600 text-sm w-3/4 min-w-[120px] text-right">REFERENCES `products`(`id`) ON DELETE CASCADE</span>
          </li>
        </ul>
      </div>

      {/* Support Tickets Table */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-md">
        <h3 className="text-2xl font-semibold text-blue-700 mb-2 pb-1 border-b border-dashed border-blue-200">
          16. <code className="bg-gray-100 p-1 rounded">support_tickets</code> table
        </h3>
        <p className="italic text-gray-600 mb-5 pl-2 border-l-4 border-blue-400">
          Manages customer support inquiries.
        </p>
        <ul className="list-none p-0 m-0">
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">AUTO_INCREMENT PRIMARY KEY</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`customer_id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`vendor_id`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">INT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`subject`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">VARCHAR(255)</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`description`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">TEXT</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`status`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">VARCHAR(50)</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">NOT NULL</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`created_at`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">TIMESTAMP</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">DEFAULT CURRENT_TIMESTAMP</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">`updated_at`</span>
            <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">TIMESTAMP</span>
            <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">FOREIGN KEY (`customer_id`)</span>
            <span className="text-red-600 text-sm w-3/4 min-w-[120px] text-right">REFERENCES `customers`(`id`) ON DELETE CASCADE</span>
          </li>
          <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
            <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">FOREIGN KEY (`vendor_id`)</span>
            <span className="text-red-600 text-sm w-3/4 min-w-[120px] text-right">REFERENCES `vendors`(`id`) ON DELETE CASCADE</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DBSchema;