import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useLayoutEffect,
} from "react";
import styles from "./Index.module.scss";

const ServerStatus = () => {

  const [message, setMessage] = useState("");
  const [readyState, setReadyState] = useState("linking ");
  const ws = useRef(null);

  useEffect(() => {
    setInterval(() => {
      if (ws.current && ws.current?.readyState === 1) {
        ws.current.send("1");
      }
    }, 1000);
  }, []);

  const webSocketInit = useCallback(() => {
    const stateArr = [
      "linking",
      "has been linked and can communicate",
      "connection closing",
      "connection closed or no link succeeded",
    ];
    if (!ws.current || ws.current.readyState === 3) {
      ws.current = new WebSocket(process.env.WS_URL);
      ws.current.onopen = (_e) =>
        setReadyState(stateArr[ws.current?.readyState ?? 0]);
      ws.current.onclose = (_e) =>
        setReadyState(stateArr[ws.current?.readyState ?? 0]);
      ws.current.onerror = (e) =>
        setReadyState(stateArr[ws.current?.readyState ?? 0]);
      ws.current.onmessage = (e) => {
        console.log(e, "====");
        setMessage(e.data);
      };
    }
  }, [ws]);

  useLayoutEffect(() => {
    webSocketInit();
    return () => {
      ws.current?.close();
    };
  }, [ws, webSocketInit]);

  return (
    <>
      <div className={styles.subTitle}>Server Status</div>
      <div className={styles.serverStatus}>{message}</div>
    </>
  );
};
export default ServerStatus;
