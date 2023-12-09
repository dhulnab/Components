import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import IconButton from "@/components/IconButton/IconButton";
import Tag from "@/components/Tag/Tag";
import Text from "@/components/Text/Text";

export default function Home() {
  return (
    <>
      <Container style={{ textAlign: "center" }} Width={1300}>
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
        <div>
          <Text size={30} bold={true} color={"#ccc"}>
            Lorem ergeg
          </Text>
        </div>
        <div>
          <Tag color={"blue"}>Tag one</Tag>
          <Tag color={"red"}>Tag two</Tag>
        </div>
      </Container>
    </>
  );
}
