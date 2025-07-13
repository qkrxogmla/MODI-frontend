import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import DiaryWritePage from "../pages/diary/DiaryWritePage";
import RecordDetailPage from "../pages/diary/RecordDetailPage";
import LoginPage from "../pages/login/LoginPage";
import MapPage from "../pages/map/MapPage";
import MyPage from "../pages/mypage/MyPage";
import Frame from "../components/common/frame/Frame";
import InitialSetting from "../pages/login/InitialSetting";
import SearchPage from "../pages/search/SearchPage";
import DiaryEmotionTag from "../pages/diary/DiaryEmotionTag";
const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: _jsx(LoginPage, {}),
        },
        {
            path: "/home",
            element: _jsx(HomePage, {}),
        },
        {
            path: "/search",
            element: _jsx(SearchPage, {}),
        },
        {
            path: "/emotion",
            element: _jsx(DiaryEmotionTag, {}),
        },
        {
            path: "/detail",
            element: _jsx(DiaryWritePage, {}),
        },
        {
            path: "/recorddetail",
            element: _jsx(RecordDetailPage, {}),
        },
        {
            path: "/map",
            element: _jsx(MapPage, {}),
        },
        {
            path: "/mypage",
            element: _jsx(MyPage, {}),
        },
        // test-frame, test-initialsetting 은 테스트용 라우터
        {
            path: "/test-frame",
            element: _jsx(Frame, {}),
        },
        {
            path: "/test-initialsetting",
            element: _jsx(InitialSetting, {}),
        },
        {
            path: "/test-recorddetail",
            element: _jsx(RecordDetailPage, {}),
        },
    ]);
    return _jsx(RouterProvider, { router: router });
};
export default Router;
