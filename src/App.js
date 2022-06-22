import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Hooks from "./components/Hooks";
import Layout from "./components/Layout";
import Error from "./components/Error";
import CounterContextProvider from "./context/CounterContext";
import MyCounter from "./components/MyCounter";
export default function App() {
  return (
    <BrowserRouter>
      <CounterContextProvider>
        <Layout>
          <Routes>
            {" "}
            <Route index element={<Home />} />
            <Route path="hooks" element={<Hooks />} />
            <Route path="counter" element={<MyCounter />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </CounterContextProvider>
    </BrowserRouter>
  );
}
