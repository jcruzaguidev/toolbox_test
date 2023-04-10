import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SecretsServices } from "../services";
import NavComponent from "../component/Nav";
import { Table } from "react-bootstrap";

const DetailPage = () => {
  const history = useNavigate();
  const { param } = useParams();
  const { getItem } = SecretsServices();
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      await getItem(param)
        .then((res) => {
          setData(res); 
        })
        .catch((err) => {
          console.log(err);
        });
    })();
  }, []);

  const handleBack = () => {
    history(`/`);
  }

  return (
    <>
      <NavComponent />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>File Name</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        <tbody>
          {data.lines.map((item, index) => (
            <tr key={index} onClick={() => handleBack()}>
              <td>{index}</td>
              <td>{data.file}</td>
              <td>{item.text}</td>
              <td>{item.number}</td>
              <td>{item.hex}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default DetailPage
