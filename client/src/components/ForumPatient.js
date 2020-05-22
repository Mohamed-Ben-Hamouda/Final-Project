import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";
import { Checkbox, Row, Col } from "antd";
const ForumPatient = () => {
  const [componentSize, setComponentSize] = useState("small");

  const [
    setHandleChange,
    nom,
    prenom,
    cin,
    email,
    dateEn,
    image,
    origine,
    phone,
    numChambre,
    numLit,
    etat,
  ] = useState("");
  const [ATCD] = useState([]);

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const handleChange = (e) => {
    useState({ [e.target.name]: e.target.value });
  };
  const onChange = (checkedValues) => {
    useState({ ATCD: checkedValues });
  };

  return (
    <div>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="middle">Middle</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
          <Form.Item label="CIN">
            <Input onChange={handleChange} name="cin" value={cin} />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Nom">
          <Input onChange={handleChange} name="nom" value={nom} />
        </Form.Item>
        <Form.Item label="Prenom">
          <Input onChange={handleChange} name="prenom" value={prenom} />
        </Form.Item>
        <Form.Item
          onChange={handleChange}
          name="dateEn"
          value={dateEn}
          label="Date d'entrer"
        >
          <DatePicker />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ type: "email" }]}>
          <Input onChange={handleChange} name="email" value={email} />
        </Form.Item>
        <Form.Item label="Téléphone">
          {"              "}
          <Input onChange={handleChange} name="phone" value={phone} />
        </Form.Item>
        <Form.Item label="Origine">
          {"   "}
          <Input onChange={handleChange} name="origin" value={origin} />
        </Form.Item>
        <Form.Item label="N° de chambre">
          {"                         "}
          <Input onChange={handleChange} name="numChambre" value={numChambre} />
        </Form.Item>
        <Form.Item label="N° de lit">
          {"   "}
          <Input onChange={handleChange} name="numLit" value={numLit} />
        </Form.Item>

        <Form.Item label="Etat Patient">
          {"                     "}
          <Select name="etat">
            <Select.Option onChange={handleChange} value={etat}>
              Infecter
            </Select.Option>
            <Select.Option onChange={handleChange} value={etat}>
              {" "}
              Non Infecter
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="ATCD">
          <div>
            <Checkbox.Group
              style={{ width: "100%" }}
              onChange={onChange}
              name="ATCD"
            >
              <Row>
                <Col span={8}>
                  <Checkbox value="Asmatique">Asmatique</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="Cardiaque">Cardiaque</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="Diabetique">Diabetique</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="Hyertensif" onChange={handleChange}>
                    Hyertensif
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="Inseficence renal">
                    Inseficence renal
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="L'immunodéficience">
                    L'immunodéficience
                  </Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};
export default ForumPatient;
