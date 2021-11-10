import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { notification, Space } from 'antd';

import capitalize from '../../utils/capitalize';

const openNotificationWithIcon = (note) => {
  let capLetter = capitalize(note.alertType);
  if (
    (typeof note.msg === 'object' || typeof note.msg === 'function') &&
    note.msg !== null
  ) {
    notification[note.alertType]({
      key: note.id,
      message: capLetter,
      description: note.msg.errors[0],
    });
  } else {
    notification[note.alertType]({
      key: note.id,
      message: capLetter,
      description: note.msg,
    });
  }
};

const Notification = () => {
  const notifications = useSelector((state) => state.alertReducer);

  const [notificationList, setnotificationList] = useState([]);
  const prevNotificationList = useRef([]);

  useEffect(() => {
    prevNotificationList.current = notificationList;
  }, [notificationList]);

  useEffect(() => {
    setnotificationList(notifications);
  }, [notifications]);

  return (
    notificationList !== null &&
    notificationList.length > 0 &&
    notificationList.length === prevNotificationList.current.length + 1 && (
      <Space>
        {notificationList.map((notification) => {
          return openNotificationWithIcon(notification);
        })}
      </Space>
    )
  );
};

export { Notification };
