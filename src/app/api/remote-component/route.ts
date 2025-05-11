import { NextRequest, NextResponse } from "next/server";
import ServerComponent from "@/components/server/ServerComponent";
import { elementToString } from "@/app/element-to-string";
import { JSX } from "react";

const serverComponentToString = async (
  props: (props: any) => Promise<JSX.Element>
): Promise<string> => {
  try {
    const renderedComponent = await ServerComponent(props);
    return elementToString(renderedComponent);
  } catch (error) {
    console.error("Error converting server component to string:", error);
    return "";
  }
};

export async function POST(request: NextRequest) {
  try {
    const serverCompInstance = await serverComponentToString(ServerComponent);
    const htmlString = serverCompInstance;
    // Create the component HTML directly without using renderToString
    const serverHTML = `${htmlString}`;

    // const data = {
    //   markup:
    //     '<div class="bg-purple-50 p-4 rounded"><p class="mb-2">Counter: <span class="font-bold">0</span></p><button class="bg-purple-500 hover:bg-purple-600 text-white px-3 py-1.5 rounded text-sm">Increment</button><p class="mt-2 text-sm text-gray-600">This is a client component with interactivity</p></div>',
    //   componentName: "ClientCounter",
    //   componentDefinition:
    //     'function ClientCounter() {\n    _s();\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n        className: "bg-purple-50 p-4 rounded",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {\n                className: "mb-2",\n                children: [\n                    "Counter: ",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {\n                        className: "font-bold",\n                        children: count\n                    }, void 0, false, {\n                        fileName: "/Users/a0c0u7k/Documents/for-medium-doc/rsc/rsc-remote/src/components/client/ClientCounter.tsx",\n                        lineNumber: 10,\n                        columnNumber: 36\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: "/Users/a0c0u7k/Documents/for-medium-doc/rsc/rsc-remote/src/components/client/ClientCounter.tsx",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {\n                onClick: ()=>setCount(count + 1),\n                className: "bg-purple-500 hover:bg-purple-600 text-white px-3 py-1.5 rounded text-sm",\n                children: "Increment"\n            }, void 0, false, {\n                fileName: "/Users/a0c0u7k/Documents/for-medium-doc/rsc/rsc-remote/src/components/client/ClientCounter.tsx",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {\n                className: "mt-2 text-sm text-gray-600",\n                children: "This is a client component with interactivity"\n            }, void 0, false, {\n                fileName: "/Users/a0c0u7k/Documents/for-medium-doc/rsc/rsc-remote/src/components/client/ClientCounter.tsx",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: "/Users/a0c0u7k/Documents/for-medium-doc/rsc/rsc-remote/src/components/client/ClientCounter.tsx",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}',
    //   props: {},
    // };

    // const clientHTML = clientComponentToString(ClientCounter);
    // Return the HTML with appropriate headers
    return new NextResponse(`${serverHTML}`);
  } catch (error) {
    console.error("Error rendering component:", error);
    return NextResponse.json(
      { error: "Failed to render component" },
      { status: 500 }
    );
  }
}
