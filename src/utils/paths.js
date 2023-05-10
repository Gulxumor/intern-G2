import Home from "../components/Home";
import HalfTime from "../components/HalfTime";
import TimeUp from "../components/TimeUp";
import Report from "../components/Report";
import BuildingTypes from "../components/BuildingTypes";
import AllUsers from "../components/AllUsers";
import OrdinaryRooms from "../components/BuildingTypes/OrdinaryRooms"
import LuxuryRooms from "../components/BuildingTypes/LuxuryRooms"
import Cottages from "../components/BuildingTypes/Cottages"
import SecondBuilding from "../components/Buildings/SecondBuilding";
import FourthBuilding from "../components/Buildings/FourthBuilding";
import SixthBuilding from "../components/Buildings/SixthBuilding"

export const path = [
    {
        id: 0,
        path: "/",
        element: < Home />
    },
    {
        id: 1,
        path: "/time-up",
        element: < TimeUp />
    },
    {
        id: 2,
        path: "/all-users/",
        element: < AllUsers />
    },
    {
        id: 3,
        path: "/report",
        element: < Report />
    },
    {
        id: 4,
        path: "/half-time",
        element: < HalfTime />
    },
    {
        id: 5,
        path: "/building-types",
        element: < BuildingTypes />,
        hasChild: true,
        children: [
            {
                id: "5-1",
                path: "ordinary-rooms",
                element: <OrdinaryRooms />,
                hasChild: true,
                children: [
                    {
                        id: "5-1-1",
                        path: "2",
                        element: <SecondBuilding />,
                    },
                    {
                        id: "5-1-2",
                        path: "4",
                        element: <FourthBuilding />,
                    },
                    {
                        id: "5-1-3",
                        path: "6",
                        element: <SixthBuilding />,
                    },
                ]
            },
            {
                id: "5-2",
                path: "luxury-rooms",
                element: <LuxuryRooms />
            },
            {
                id: "5-3",
                path: "cottages",
                element: <Cottages />
            },
        ]
    },
]
