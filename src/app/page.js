"use client";
import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import Header from "@/components/Header/Header";
import IconButton from "@/components/IconButton/IconButton";
import Input from "@/components/Input/Input";
import Modal from "@/components/Modal/Modal";
import Space from "@/components/Space/Space";
import Table from "@/components/Table/Table";
import Tag from "@/components/Tag/Tag";
import Text from "@/components/Text/Text";
import { useState } from "react";

export default function Home() {
  const [inputContent, setInputContent] = useState("");
  console.log(inputContent);
  const list = [
    { id: 1, name: "Ali", age: 22, city: "Baghdad" },
    { id: 2, name: "Ahmed", age: 20, city: "Baghdad" },
    { id: 3, name: "Alaa", age: 21, city: "Baghdad" },
    { id: 4, name: "Baqer", age: 22, city: "Baghdad" },
    { id: 5, name: "Dhulfiqar", age: 20, city: "Baghdad" },
  ];
  return (
    <>
      {/* Header */}
      <Header
        brand={"Components"}
        links={[
          {
            l1: "Link-1",
            l2: "Link-2",
            l3: "Link-3",
            l4: "Link-4",
            l5: "Link-5",
          },
        ]}
      />
      <Space height={20} />
      <Container style={{ textAlign: "center" }} Width={600}>
        {/* Buttons */}
        <div>
          <Button size="md" type="primary">
            one
          </Button>
          <Button size="md" type="secondary">
            two
          </Button>
          <Button size="md">three</Button>
          <br />
          <Button size="sm" type="primary">
            one
          </Button>
          <Button size="sm" type="secondary">
            two
          </Button>
          <Button size="sm">three</Button>
        </div>
        <Space height={20} />
        {/* Icon Buttons */}
        <div>
          <IconButton icon={"Facebook"} type={"primary"} size={"md"} />
          <IconButton icon={"Linkedin"} type={"secondary"} size={"md"} />
          <IconButton icon={"Github"} size={"md"} />
          <br />
          <IconButton icon={"Twitter"} type={"primary"} size={"sm"} />
          <IconButton icon={"Linkedin"} type={"secondary"} size={"sm"} />
          <IconButton icon={"Github"} size={"sm"} />
        </div>
        {/* text */}
        <Space height={20} />
        <div>
          <Text size={16} bold={false} color={"#6666666"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </div>
        <Space height={35} />
        {/* Tage */}
        <div>
          <Tag color={"blue"}>Tag one</Tag>
          <Tag color={"orange"}>Tag two</Tag>
        </div>
        <Space height={50} />
        {/* input */}
        <Input
          placeholder={"Input component"}
          value={inputContent}
          onChange={(el) => setInputContent(el.target.value)}
          style={{ outline: "none" }}
        />
        <Space height={20} />
        {/* Modal */}
        <div>
          <Modal isOpen={false} onClose={() => console.log("close...")}>
            <h2>Hello From Modal</h2>
          </Modal>
        </div>
        <Space height={20} />
        {/* Table */}
        <Table
          columns={[
            {
              id: "Id",
              name: "Name",
              age: "Age",
              city: "City",
            },
          ]}
          list={list}
        />
        <Space height={60} />
      </Container>
    </>
  );
}
