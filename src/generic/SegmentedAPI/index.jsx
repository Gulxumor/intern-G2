import { Avatar } from "antd";

const useSegmentedAPI = () => {
  const segmentedLocale = () => [
    {
      label: (
        <div>
          <Avatar
            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/255px-Flag_of_the_United_States.svg.png"
            alt="avatar"
          />
          <div>English</div>
        </div>
      ),
      value: "en",
    },
    {
      label: (
        <div>
          <Avatar
            src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/250px-Flag_of_Russia.svg.png"
            alt="russia-flag"
          />
          <div>Русский</div>
        </div>
      ),
      value: "ru",
    },
    {
      label: (
        <div>
          <Avatar
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/255px-Flag_of_Uzbekistan.svg.png"
            alt="uzbek-flag"
          />
          <div>O'zbek</div>
        </div>
      ),
      value: "uzLotin",
    },
    {
      label: (
        <div>
          <Avatar
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/255px-Flag_of_Uzbekistan.svg.png"
            alt="uzbek-flag"
          />
          <div>Ўзбек</div>
        </div>
      ),
      value: "uzKrill",
    },
  ];

  return { segmentedLocale };
};

export default useSegmentedAPI;
