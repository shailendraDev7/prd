import React from "react";

const MOU = () => {
  return (
      <div className="m-3 p-6 bg-white border border-gray-200 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-lg">
        <h2 className="text-3xl font-bold text-blue-700 mb-4 pb-2 border-b border-dashed border-blue-300">
          Memorandum of Understanding (MOU)
        </h2>

        <p className="italic text-gray-600 mb-6 pl-4 border-l-4 border-blue-400">
          This Memorandum of Understanding (MOU) establishes the collaboration
          between Amigo Estore and its vendors, defining roles,
          responsibilities, and operational guidelines.
        </p>

        <div className="space-y-5">
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-md shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">1. Purpose</h3>
            <p className="text-gray-700 mt-2">
              This agreement outlines the partnership between Amigo Estore
              ("Platform Provider") and vendors, ensuring a seamless marketplace
              experience.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-4 rounded-md shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">
              2. Scope of Work
            </h3>
            <p className="text-gray-700 mt-2">
              Vendors can list and sell products while adhering to platform
              policies, ensuring quality, pricing accuracy, and compliance with
              regulations.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-4 rounded-md shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">
              3. Roles & Responsibilities
            </h3>
            <p className="text-gray-700 mt-2">
              <span className="font-bold">Amigo Estore:</span> Maintains the
              marketplace, offers secure payment processing, and provides vendor
              support.
            </p>
            <p className="text-gray-700 mt-2">
              <span className="font-bold">Vendor:</span> Lists legitimate
              products, manages inventory, fulfills orders on time, and complies
              with marketplace policies.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-4 rounded-md shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">
              4. Financial Terms
            </h3>
            <p className="text-gray-700 mt-2">
              Vendors agree to a commission-based model of{" "}
              <span className="font-bold">[X]% per sale</span>, with settlements
              processed <span className="font-bold">[weekly/monthly]</span>.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-4 rounded-md shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">
              5. Confidentiality & Data Protection
            </h3>
            <p className="text-gray-700 mt-2">
              Both parties agree to safeguard sensitive business and customer
              data. Vendors shall not disclose proprietary platform information.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-4 rounded-md shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">
              6. Termination Clause
            </h3>
            <p className="text-gray-700 mt-2">
              Either party may terminate the agreement with a{" "}
              <span className="font-bold">30-day written notice</span>.
              Violations of marketplace policies may result in immediate action.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-4 rounded-md shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">
              7. Governing Law
            </h3>
            <p className="text-gray-700 mt-2">
              This MOU shall be governed by the laws of{" "}
              <span className="font-bold">[Applicable Jurisdiction]</span>.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-4 rounded-md shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">
              8. Agreement Acceptance
            </h3>
            <p className="text-gray-700 mt-2">
              By signing below, both parties acknowledge and agree to the terms
              outlined in this MOU.
            </p>

            <div className="mt-4">
              <p className="font-bold text-gray-800">
                Amigo Estore Representative
              </p>
              <p className="text-gray-700">
                Signature: ____________ | Date: __/__/____
              </p>
            </div>

            <div className="mt-4">
              <p className="font-bold text-gray-800">Vendor Representative</p>
              <p className="text-gray-700">
                Signature: ____________ | Date: __/__/____
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default MOU;
