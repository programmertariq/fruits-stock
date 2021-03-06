import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Button, Spinner, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FooterHeightContext } from "../../../App";
import useFruits from "../../../hooks/useFruits";
import http from "../../../service/http";
import "./ManageInventory.css";

const ManageInventory = () => {
  const [fruits, setFruits, loading] = useFruits();
  const footerHeight = useContext(FooterHeightContext);

  const handleDelete = async (id) => {
    const agree = window.confirm("Are you sure to delete the item?");
    if (!agree) return;

    try {
      const res = await http.delete(`/fruits/${id}`);

      const deletedFruit = res.data;
      const newFruits = fruits.filter((f) => f._id !== deletedFruit._id);
      setFruits(newFruits);
      toast.success("successfully deleted");
    } catch (error) {
      toast.error("error deleting");
    }
  };
  return (
    <section
      className="container"
      style={{ minHeight: `calc(100vh - ${footerHeight}px)` }}
    >
      <h1 className="text-center text-success mt-2 mb-4">Manage Inventory</h1>

      <article className="all-products mx-auto">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Fruit Name</th>
              <th>Stock Left</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {fruits.map((f) => (
              <tr key={f._id}>
                <td>{f.name}</td>
                <td>{f.quantity}</td>
                <td>
                  <Button
                    onClick={() => handleDelete(f._id)}
                    className=""
                    variant="danger"
                  >
                    X
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {loading && (
          <div className="container text-center my-5">
            <Spinner animation="border" variant="info" />
          </div>
        )}
      </article>
      <div className="text-center my-4">
        <Link to="/inventory/new" className="btn btn-primary">
          Add New Item
        </Link>
      </div>
    </section>
  );
};

export default ManageInventory;
