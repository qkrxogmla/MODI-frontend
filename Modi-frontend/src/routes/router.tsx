import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import DiaryPage from "../pages/diary/DiaryPage";
import DiaryWritePage from "../pages/diary/DiaryWritePage";
import RecordDetailPage from "../pages/diary/RecordDetailPage";
import LoginPage from "../pages/login/LoginPage";
import MapPage from "../pages/map/MapPage";
import MyPage from "../pages/mypage/MyPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
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
  ]);
  return <RouterProvider router={router} />;
};
export default Router;
