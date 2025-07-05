import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import DiaryPage from "../pages/diary/DiaryPage";
import DiaryWritePage from "../pages/diary/DiaryWritePage";
import RecordDetailPage from "../pages/diary/RecordDetailPage";
import LoginPage from "../pages/login/LoginPage";
import MapPage from "../pages/map/MapPage";
import MyPage from "../pages/mypage/MyPage";

import Frame from "../components/common/frame/Frame";
import InitialSetting from "../pages/login/InitialSetting";

import SearchPage from "../pages/search/SearchPage";


const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/search",
      element: <SearchPage />,
    },
    {
      path: "/diary",
      element: <DiaryPage />,
    },
    {
      path: "/diarywrite",
      element: <DiaryWritePage />,
    },
    {
      path: "/recorddetail",
      element: <RecordDetailPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },

    {
      path: "/map",
      element: <MapPage />,
    },
    {
      path: "/mypage",
      element: <MyPage />,
    },
    // test-frame, test-initialsetting 은 테스트용 라우터
    {
      path: "/test-frame",
      element: <Frame />,
    },
    {
      path: "/test-initialsetting",
      element: <InitialSetting />,
    },
  ]);
  return <RouterProvider router={router} />;
};
export default Router;
