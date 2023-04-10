import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SecretsServices } from "../services";
import NavComponent from "../component/Nav";
import { Table } from "react-bootstrap";

const HomePage = () => {
  const history = useNavigate();
  const { getListItems } = SecretsServices();
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      await getListItems()
        .then((res) => {
          setData(res); 
        })
        .catch((err) => {
          console.log(err);
        });
    })();
  }, []);

  const handleDetail = (item) => {
    history(`/detail/${item}`);
  }

  return (
    <>
      <NavComponent />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Files</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} onClick={() => handleDetail(item)}>
              <td>{index}</td>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default HomePage;
