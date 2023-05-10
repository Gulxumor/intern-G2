import { useSelector, useDispatch } from "react-redux";
import { switchlocaleModalVisibility } from "../../../redux/modalSlice";
import { Segmented, Modal } from "antd";
import useSegmentedAPI from "../../../generic/SegmentedAPI";
import { useState } from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

const LocaleModal = () => {
  const { localeModalVisibility } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const { segmentedLocale } = useSegmentedAPI();
  const [localeState, setLocaleState] = useState("");
  const { t } = useTranslation();

  const onCancel = () => dispatch(switchlocaleModalVisibility());

  const switchLanguage = () => {
    i18n.changeLanguage(localeState);
    localStorage.setItem("locale", localeState);
    return onCancel();
  };

  return (
    <Modal
      title={t("modal.profileModal.profile")}
      open={localeModalVisibility}
      okText={t("modal.profileModal.change")}
      cancelText={t("empty_places.information.cancel")}
      onCancel={onCancel}
      onOk={switchLanguage}
    >
      <Segmented
        onChange={(e) => setLocaleState(e)}
        block
        defaultValue={"uzLotin"}
        style={{ marginTop: "20px" }}
        options={segmentedLocale()}
      />
    </Modal>
  );
};

export default LocaleModal;
