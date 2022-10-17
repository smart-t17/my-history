import React, { useEffect, useState } from "react";
import styles from "./Index.module.scss";

const DatabaseEntry = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(process.env.API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data?.body?.people) {
          setData(data?.body?.people);
        } else {
          setData([]);
        }
      });
  }, []);
  return (
    <>
      <div className={styles.subTitle}>Database Entries</div>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>IP Address</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((people) => {
                return (
                  <tr key={people.id}>
                    <td>{people.first_name}</td>
                    <td>{people.last_name}</td>
                    <td>{people.gender}</td>
                    <td>{people.email}</td>
                    <td>{people.ip_address}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default DatabaseEntry;
