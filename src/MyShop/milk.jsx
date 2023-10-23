import React, { useState, useEffect } from "react";
import milkService from "../service/milk.service";
import "../Style/milk.css";

export default function MilkShop() {
  const [dataraw, setDataRaw] = useState([]);

  // Định nghĩa hàm gọi API bằng async/await
  const fetchData = async () => {
    try {
      const response = await milkService.getMilks();
      // console.log( response.data);// liem tra dua lieu tren console
      setDataRaw(response.data);
      // Lưu dữ liệu vào state
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu:", error);
    }
  };
  useEffect(() => {
    fetchData(); // Gọi hàm fetchData để lấy dữ liệu khi component được tạo (mounted)
  }, []);

  // render sản phẩm
  let rendermilkproduct = () => {
    return dataraw.map((item, index) => {
      console.log("Milk: ", item);
      return (
        <div key={index}>
          <ul>
            <li>
              <img src={item.imageUrl} alt="" />
            </li>
            <li>{item.productName}</li>
            <li>{item.productDescription}</li>
            <li>{item.quantity}</li>
          </ul>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Danh sách sản phẩm sữa</h1>
      {rendermilkproduct()};
    </div>
  );
}
