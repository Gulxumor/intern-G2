import Home from "../components/Home";
import HalfTime from "../components/HalfTime";
import TimeUp from "../components/TimeUp";
import Report from "../components/Report";
import BuildingTypes from "../components/BuildingTypes";
import AllUsers from "../components/AllUsers";



export const path = [
    { id: 0, path: "/", element: < Home /> },
    { id: 1, path: "/time-up", element: < TimeUp /> },
    { id: 2, path: "all-users/", element: < AllUsers /> },
    { id: 3, path: "/building-types", element: < BuildingTypes /> },
    { id: 4, path: "/half-time", element: < HalfTime /> },
    { id: 5, path: "/report", element: < Report /> },
]
