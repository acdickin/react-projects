import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5f7fc197"; const _jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=5f7fc197"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react;
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=5f7fc197"; const ReactDOM = __vite__cjsImport2_reactDom_client.__esModule ? __vite__cjsImport2_reactDom_client.default : __vite__cjsImport2_reactDom_client;
import "/src/index.css";
import App from "/src/App.tsx";
import Home from "/src/Home.tsx";
import Search from "/src/Pages/SynonymsSearch/SynonymsSearch.tsx";
import Post from "/src/Pages/Posts/DisplayPosts.tsx";
import Guess from "/src/Pages/ColorGuesser/Guess.tsx";
import MemoryBoard from "/src/Pages/MemoryBoard/MemoryBoard.tsx";
import Todo from "/src/Pages/Todo/Todo.tsx";
import { createBrowserRouter, RouterProvider } from "/node_modules/.vite/deps/react-router-dom.js?v=5f7fc197";
const router = createBrowserRouter([
    {
        element: /*#__PURE__*/ _jsxDEV(App, {}, void 0, false, {
            fileName: "E:/code/react-projects/src/main.tsx",
            lineNumber: 17,
            columnNumber: 14
        }, this),
        children: [
            {
                path: "/",
                element: /*#__PURE__*/ _jsxDEV(Home, {}, void 0, false, {
                    fileName: "E:/code/react-projects/src/main.tsx",
                    lineNumber: 21,
                    columnNumber: 18
                }, this)
            },
            {
                path: "/synonyms",
                element: /*#__PURE__*/ _jsxDEV(Search, {}, void 0, false, {
                    fileName: "E:/code/react-projects/src/main.tsx",
                    lineNumber: 25,
                    columnNumber: 18
                }, this)
            },
            {
                path: "/post",
                element: /*#__PURE__*/ _jsxDEV(Post, {}, void 0, false, {
                    fileName: "E:/code/react-projects/src/main.tsx",
                    lineNumber: 29,
                    columnNumber: 18
                }, this)
            },
            {
                path: "/memory-game",
                element: /*#__PURE__*/ _jsxDEV(MemoryBoard, {}, void 0, false, {
                    fileName: "E:/code/react-projects/src/main.tsx",
                    lineNumber: 33,
                    columnNumber: 18
                }, this)
            },
            {
                path: "/todo",
                element: /*#__PURE__*/ _jsxDEV(Todo, {}, void 0, false, {
                    fileName: "E:/code/react-projects/src/main.tsx",
                    lineNumber: 37,
                    columnNumber: 18
                }, this)
            },
            {
                path: "/color-guesser",
                element: /*#__PURE__*/ _jsxDEV(Guess, {}, void 0, false, {
                    fileName: "E:/code/react-projects/src/main.tsx",
                    lineNumber: 41,
                    columnNumber: 18
                }, this)
            }
        ]
    }
]);
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/ _jsxDEV(React.StrictMode, {
    children: /*#__PURE__*/ _jsxDEV(RouterProvider, {
        router: router
    }, void 0, false, {
        fileName: "E:/code/react-projects/src/main.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this)
}, void 0, false, {
    fileName: "E:/code/react-projects/src/main.tsx",
    lineNumber: 49,
    columnNumber: 3
}, this));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnXHJcbmltcG9ydCAnLi9pbmRleC5jc3MnXHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXHJcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSdcclxuaW1wb3J0IFNlYXJjaCBmcm9tICcuL1BhZ2VzL1N5bm9ueW1zU2VhcmNoL1N5bm9ueW1zU2VhcmNoJ1xyXG5pbXBvcnQgUG9zdCBmcm9tICcuL1BhZ2VzL1Bvc3RzL0Rpc3BsYXlQb3N0cydcclxuaW1wb3J0IEd1ZXNzIGZyb20gJy4vUGFnZXMvQ29sb3JHdWVzc2VyL0d1ZXNzJ1xyXG5pbXBvcnQgTWVtb3J5Qm9hcmQgZnJvbSAnLi9QYWdlcy9NZW1vcnlCb2FyZC9NZW1vcnlCb2FyZCdcclxuaW1wb3J0IFRvZG8gZnJvbSAnLi9QYWdlcy9Ub2RvL1RvZG8nXHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlQnJvd3NlclJvdXRlcixcclxuICBSb3V0ZXJQcm92aWRlcixcclxufSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5jb25zdCByb3V0ZXIgPSBjcmVhdGVCcm93c2VyUm91dGVyKFtcclxuICB7XHJcbiAgICBlbGVtZW50OiA8QXBwIC8+LFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6IFwiL1wiLFxyXG4gICAgICAgIGVsZW1lbnQ6IDxIb21lIC8+XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBcIi9zeW5vbnltc1wiLFxyXG4gICAgICAgIGVsZW1lbnQ6IDxTZWFyY2ggLz4sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBcIi9wb3N0XCIsXHJcbiAgICAgICAgZWxlbWVudDogPFBvc3QgLz4sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBcIi9tZW1vcnktZ2FtZVwiLFxyXG4gICAgICAgIGVsZW1lbnQ6IDxNZW1vcnlCb2FyZCAvPixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6IFwiL3RvZG9cIixcclxuICAgICAgICBlbGVtZW50OiA8VG9kbyAvPixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6IFwiL2NvbG9yLWd1ZXNzZXJcIixcclxuICAgICAgICBlbGVtZW50OiA8R3Vlc3MgLz5cclxuICAgICAgfVxyXG5cclxuICAgIF0sXHJcbiAgfSxcclxuXSk7XHJcblxyXG5SZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykhKS5yZW5kZXIoXHJcbiAgPFJlYWN0LlN0cmljdE1vZGU+XHJcbiAgICA8Um91dGVyUHJvdmlkZXIgcm91dGVyPXtyb3V0ZXJ9IC8+XHJcbiAgPC9SZWFjdC5TdHJpY3RNb2RlPixcclxuKVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsIkFwcCIsIkhvbWUiLCJTZWFyY2giLCJQb3N0IiwiR3Vlc3MiLCJNZW1vcnlCb2FyZCIsIlRvZG8iLCJjcmVhdGVCcm93c2VyUm91dGVyIiwiUm91dGVyUHJvdmlkZXIiLCJyb3V0ZXIiLCJlbGVtZW50IiwiY2hpbGRyZW4iLCJwYXRoIiwiY3JlYXRlUm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCJTdHJpY3RNb2RlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7QUFBQSxPQUFPQSxXQUFXLFFBQU87QUFDekIsT0FBT0MsY0FBYyxtQkFBa0I7QUFDdkMsT0FBTyxjQUFhO0FBQ3BCLE9BQU9DLFNBQVMsUUFBTztBQUN2QixPQUFPQyxVQUFVLFNBQVE7QUFDekIsT0FBT0MsWUFBWSx3Q0FBdUM7QUFDMUQsT0FBT0MsVUFBVSw2QkFBNEI7QUFDN0MsT0FBT0MsV0FBVyw2QkFBNEI7QUFDOUMsT0FBT0MsaUJBQWlCLGtDQUFpQztBQUN6RCxPQUFPQyxVQUFVLG9CQUFtQjtBQUNwQyxTQUNFQyxtQkFBbUIsRUFDbkJDLGNBQWMsUUFDVCxtQkFBbUI7QUFDMUIsTUFBTUMsU0FBU0Ysb0JBQW9CO0lBQ2pDO1FBQ0VHLHVCQUFTLFFBQUNWOzs7OztRQUNWVyxVQUFVO1lBQ1I7Z0JBQ0VDLE1BQU07Z0JBQ05GLHVCQUFTLFFBQUNUOzs7OztZQUNaO1lBQ0E7Z0JBQ0VXLE1BQU07Z0JBQ05GLHVCQUFTLFFBQUNSOzs7OztZQUNaO1lBQ0E7Z0JBQ0VVLE1BQU07Z0JBQ05GLHVCQUFTLFFBQUNQOzs7OztZQUNaO1lBQ0E7Z0JBQ0VTLE1BQU07Z0JBQ05GLHVCQUFTLFFBQUNMOzs7OztZQUNaO1lBQ0E7Z0JBQ0VPLE1BQU07Z0JBQ05GLHVCQUFTLFFBQUNKOzs7OztZQUNaO1lBQ0E7Z0JBQ0VNLE1BQU07Z0JBQ05GLHVCQUFTLFFBQUNOOzs7OztZQUNaO1NBRUQ7SUFDSDtDQUNEO0FBRURMLFNBQVNjLFVBQVUsQ0FBQ0MsU0FBU0MsY0FBYyxDQUFDLFNBQVVDLE1BQU0sZUFDMUQsUUFBQ2xCLE1BQU1tQixVQUFVO2NBQ2YsY0FBQSxRQUFDVDtRQUFlQyxRQUFRQSJ9