import { Select, Space } from 'antd';
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const CitiesSelect = () => (
  <Space wrap>
    <Select
      defaultValue="Москва"
      className="w-[160px]"
      bordered={false}
      onChange={handleChange}
      options={[
        {
          value: 'москва',
          label: 'Москва',
        },
        {
          value: 'петербург',
          label: 'Санкт-Петербург',
        },
        {
          value: 'домодедово',
          label: 'Домодедово',
        },
      ]}
    />
  </Space>
);
export default CitiesSelect;