import React from "react";

const Stack: React.FC = () => {
  return (
    <div>
      <div className="flex flex-wrap mx-2">
        <div className="w-full md:w-1/2 px-4 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md transition-all duration-300 ease-in-out hover:scale-103 hover:shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2 pb-1 border-b border-dashed border-blue-200">
              <code className="bg-gray-100 p-1 rounded">Frontend Stack</code>
            </h3>
            <p className="italic text-gray-600 mb-5 pl-2 border-l-4 border-blue-400">
              Key technologies and libraries for building interactive user
              interfaces and client-side applications.
            </p>
            <ul className="list-none p-0 m-0">
              <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
                <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">
                  Framework
                </span>
                <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">
                  <a
                    href="https://vercel.com/frameworks/nextjs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Next.js
                  </a>
                </span>
                <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">
                  React-based, SSR/SSG
                </span>
              </li>
              <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
                <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">
                  PWA Utility
                </span>
                <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">
                  <a
                    href="https://nextjs.org/docs/app/guides/progressive-web-apps"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Next-pwa
                  </a>
                </span>
                <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">
                  Offline support, app-like experience
                </span>
              </li>
              <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
                <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">
                  Styling
                </span>
                <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">
                  <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tailwind CSS
                  </a>
                </span>
                <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">
                  Utility-first CSS framework
                </span>
              </li>
              <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
                <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">
                  UI Components
                </span>
                <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">
                  <a
                    href="https://ui.shadcn.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Shadcn/UI
                  </a>
                </span>
                <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">
                  Extensible, accessible components
                </span>
              </li>
              <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
                <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">
                  Animation
                </span>
                <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">
                  <a
                    href="https://www.framer.com/motion/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Framer Motion
                  </a>
                </span>
                <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">
                  Production-ready motion library
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md transition-all duration-300 ease-in-out hover:scale-103 hover:shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2 pb-1 border-b border-dashed border-blue-200">
              <code className="bg-gray-100 p-1 rounded">Backend Stack</code>
            </h3>
            <p className="italic text-gray-600 mb-5 pl-2 border-l-4 border-blue-400">
              Core technologies for server-side logic, API development, and data
              manipulation.
            </p>
            <ul className="list-none p-0 m-0">
              <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
                <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">
                  Framework
                </span>
                <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">
                  <a
                    href="https://nestjs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Nest.js
                  </a>
                </span>
                <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">
                  TypeScript, modular architecture
                </span>
              </li>
              <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
                <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">
                  ORM
                </span>
                <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">
                  <a
                    href="https://orm.drizzle.team/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Drizzle ORM
                  </a>
                </span>
                <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">
                  Type-safe queries, lightweight
                </span>
              </li>
              <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
                <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">
                  Validation
                </span>
                <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">
                  <a
                    href="https://zod.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Zod
                  </a>
                </span>
                <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">
                  Schema declaration and validation
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap mx-2">
        <div className="w-full md:w-1/2 px-4 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md transition-all duration-300 ease-in-out hover:scale-103 hover:shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2 pb-1 border-b border-dashed border-blue-200">
              <code className="bg-gray-100 p-1 rounded">Database & Storage</code>
            </h3>
            <p className="italic text-gray-600 mb-5 pl-2 border-l-4 border-blue-400">
              Solutions for persistent data storage and digital asset
              management.
            </p>
            <ul className="list-none p-0 m-0">
              <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
                <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">
                  Database
                </span>
                <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">
                  <a
                    href="https://supabase.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Supabase
                  </a>
                </span>
                <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">
                  PostgreSQL, real-time capabilities
                </span>
              </li>
              <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
                <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">
                  File Storage
                </span>
                <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">
                  <a
                    href="https://supabase.com/docs/guides/storage"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Supabase Storage
                  </a>{" "}
                  /{" "}
                  <a
                    href="https://cloudinary.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cloudinary
                  </a>
                </span>
                <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">
                  Scalable media asset hosting
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md transition-all duration-300 ease-in-out hover:scale-103 hover:shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2 pb-1 border-b border-dashed border-blue-200">
              <code className="bg-gray-100 p-1 rounded">API Management</code>
            </h3>
            <p className="italic text-gray-600 mb-5 pl-2 border-l-4 border-blue-400">
              Tools and services for efficient API creation and consumption.
            </p>
            <ul className="list-none p-0 m-0">
              <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
                <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">
                  GraphQL Server
                </span>
                <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">
                  <a
                    href="https://www.apollographql.com/docs/apollo-server/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apollo Server
                  </a>
                </span>
                <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">
                  Production-ready GraphQL server
                </span>
              </li>
              <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
                <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">
                  API Gateway
                </span>
                <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">
                  <a
                    href="https://hasura.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hasura
                  </a>
                </span>
                <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">
                  Instant GraphQL from DB
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap mx-2">
        <div className="w-full md:w-1/2 px-4 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md transition-all duration-300 ease-in-out hover:scale-103 hover:shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2 pb-1 border-b border-dashed border-blue-200">
              <code className="bg-gray-100 p-1 rounded">Authentication</code>
            </h3>
            <p className="italic text-gray-600 mb-5 pl-2 border-l-4 border-blue-400">
              System for user identity verification and access control.
            </p>
            <ul className="list-none p-0 m-0">
              <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
                <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">
                  Auth Provider
                </span>
                <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">
                  <a
                    href="https://supabase.com/docs/guides/auth"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Supabase Auth
                  </a>
                </span>
                <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">
                  Integrated, secure authentication
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md transition-all duration-300 ease-in-out hover:scale-103 hover:shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2 pb-1 border-b border-dashed border-blue-200">
              <code className="bg-gray-100 p-1 rounded">Deployment</code>
            </h3>
            <p className="italic text-gray-600 mb-5 pl-2 border-l-4 border-blue-400">
              Platforms and services for hosting and deploying applications
              globally.
            </p>
            <ul className="list-none p-0 m-0">
              <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
                <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">
                  Frontend
                </span>
                <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">
                  <a
                    href="https://vercel.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Vercel
                  </a>
                </span>
                <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">
                  Frontend hosting, CI/CD, Edge Functions
                </span>
              </li>
              <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
                <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">
                  Backend
                </span>
                <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">
                  <a
                    href="https://railway.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Railway
                  </a>
                </span>
                <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">
                  Cloud hosting for backend services
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap mx-2">
        <div className="w-full md:w-1/2 px-4 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md transition-all duration-300 ease-in-out hover:scale-103 hover:shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2 pb-1 border-b border-dashed border-blue-200">
              <code className="bg-gray-100 p-1 rounded">PWA Features</code>
            </h3>
            <p className="italic text-gray-600 mb-5 pl-2 border-l-4 border-blue-400">
              Tools for enabling Progressive Web App capabilities for enhanced
              user experience.
            </p>
            <ul className="list-none p-0 m-0">
              <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
                <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">
                  Service Worker
                </span>
                <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">
                  <a
                    href="https://developers.google.com/web/tools/workbox"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Workbox
                  </a>
                </span>
                <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">
                  Offline caching, asset preloading
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md transition-all duration-300 ease-in-out hover:scale-103 hover:shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2 pb-1 border-b border-dashed border-blue-200">
              <code className="bg-gray-100 p-1 rounded">Monitoring</code>
            </h3>
            <p className="italic text-gray-600 mb-5 pl-2 border-l-4 border-blue-400">
              Services for real-time error tracking and application performance
              insights.
            </p>
            <ul className="list-none p-0 m-0">
              <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
                <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">
                  Error Tracking
                </span>
                <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">
                  <a
                    href="https://sentry.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sentry
                  </a>
                </span>
                <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">
                  Real-time error monitoring & debugging
                </span>
              </li>
              <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
                <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">
                  Product Analytics
                </span>
                <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">
                  <a
                    href="https://posthog.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PostHog
                  </a>
                </span>
                <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">
                  Open-source product analytics
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap mx-2">
        <div className="w-full md:w-1/2 px-4 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md transition-all duration-300 ease-in-out hover:scale-103 hover:shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2 pb-1 border-b border-dashed border-blue-200">
              <code className="bg-gray-100 p-1 rounded">AI Integration</code>
            </h3>
            <p className="italic text-gray-600 mb-5 pl-2 border-l-4 border-blue-400">
              Libraries and APIs for incorporating Artificial Intelligence and
              Machine Learning capabilities.
            </p>
            <ul className="list-none p-0 m-0">
              <li className="bg-blue-50 border border-blue-200 p-3 mb-2 rounded-md flex flex-wrap items-baseline">
                <span className="font-bold text-gray-800 w-1/4 min-w-[100px]">
                  SDKs/APIs
                </span>
                <span className="text-purple-700 font-mono w-1/4 min-w-[80px]">
                  <a
                    href="https://cloud.google.com/vertex-ai/generative-ai/docs/sdks/overview"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    AI SDK
                  </a>{" "}
                  /{" "}
                  <a
                    href="https://huggingface.co/docs/api-inference/index"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hugging Face APIs
                  </a>
                </span>
                <span className="text-red-600 text-sm w-2/4 min-w-[120px] text-right">
                  ML model integration & inference
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
