import { Canvas } from "./lib/Canvas";
import { View } from "./lib/View";
import { Text } from "./lib/Text";
import { Layout, Row, Col } from "./lib/Layout";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function App() {
  return (
    <div className="App">
      <Canvas width={600} height={4000}>
        <Layout>
          <Row height={120}>
            <View
              top={0}
              left={0}
              width={500}
              height={120}
              backgroundColor={"orange"}
            >
              <Text
                fontSize={"30px"}
                height={30}
                fontFamily={"Tahoma"}
                color="green"
                hoverColor={"darkgreen"}
                top={20}
                left={20}
                onMouseDown={(e) => console.log("click")}
              >
                Hello
              </Text>
            </View>
          </Row>
          <Row height={120}>
            <View
              top={0}
              left={0}
              width={500}
              height={120}
              backgroundColor={"DarkKhaki"}
            >
              <Text
                fontSize={"30px"}
                height={30}
                fontFamily={"Tahoma"}
                color="brown"
                hoverColor={"darkgreen"}
                top={20}
                left={20}
                onMouseDown={(e) => console.log("click")}
              >
                World
              </Text>
            </View>
          </Row>
          <Row height={100}>
            <Col width={100}>
              <View
                top={0}
                left={0}
                width={100}
                height={100}
                backgroundColor={"purple"}
              ></View>
            </Col>
            <Col width={100}>
              <View
                top={0}
                left={0}
                width={100}
                height={100}
                backgroundColor={"yellow"}
              ></View>
            </Col>
            <Col width={300}>
              <View
                top={0}
                left={0}
                width={300}
                height={100}
                backgroundColor={"brown"}
              ></View>
            </Col>
          </Row>
          <Row height={100}>
            <View
              top={0}
              left={0}
              width={500}
              height={100}
              backgroundColor={"green"}
            ></View>
          </Row>

          <Layout>
            {Array.from({ length: 100 }).map((a, i) => (
              <Row height={100} key={i}>
                <View
                  top={0}
                  left={0}
                  width={500}
                  height={100}
                  backgroundColor={getRandomColor()}
                >
                  <Text
                    fontSize={"14px"}
                    height={14}
                    fontFamily={"Tahoma"}
                    color="black"
                    top={40}
                    left={20}
                    onMouseDown={(e) => console.log("click")}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </View>
              </Row>
            ))}
          </Layout>
        </Layout>
      </Canvas>
    </div>
  );
}

export default App;
