// import React, { useState, useEffect } from 'react';
// import { Button } from 'antd';

// interface ShapeProps {
//   x: number;
//   y: number;
//   width?: number;
//   height?: number;
//   rotation: number;
//   shapeType: 'rectangle' | 'circle' | 'vatel';
// }


// const initialShapes: ShapeProps[] = [
//   {
//     x: 50,
//     y: 50,
//     width: 50,
//     height: 50,
//     rotation: 0,
//     shapeType: 'circle',
//   },
//   {
//     x: 50,
//     y: 50,
//     width: 50,
//     height: 50,
//     rotation: 0,
//     shapeType: 'vatel',
//   },
//   // Add more shapes as needed with the shapeType 'circle'
//   {
//     x: 100,
//     y: 100,
//     width: 50,
//     height: 50,
//     rotation: 45,
//     shapeType: 'circle',
//   },
//   // Add more shapes as needed with the shapeType 'circle'
// ];

// const Shape: React.FC<ShapeProps> = ({ x, y, width, height, rotation, shapeType }) => {

//   let shapeStyles: React.CSSProperties = {
//     position: 'absolute',
//     left: x,
//     top: y,
//     transform: `rotate(${rotation}rad)`,
//     background: '#00F', // Blue color
//   };

//   let shapeStyles2: React.CSSProperties = {
//     position: 'absolute',
//     left: x,
//     top: y,
//     transform: `rotate(${rotation}rad)`,
//     background: '#00F', // Blue color
//   };

//   if (shapeType === 'rectangle') {
//     shapeStyles = {
//       ...shapeStyles,
//       width: `${width}px`,
//       height: `${height}px`,
//     };
//   } else if (shapeType === 'circle') {
//     shapeStyles = {
//       ...shapeStyles, ...shapeStyles,
//       width: `${width}px`, // Using width as diameter for the circle
//       height: `${height}px`,
//       borderRadius: '50%',
//     }

//     // shapeStyles2 = {
//     //   ...shapeStyles2,
//     //   width: `${width}px`, // Using width2 as diameter for the second circle
//     //   height: `${height}px`,
//     //   borderRadius: '50%',
//     // };
//   }


//   return (
//     <>
//       <div style={shapeStyles}></div>
//       <div style={shapeStyles2}></div>
//     </>
//   );
// };

// const App: React.FC = () => {
//   const [data, setData] = useState(["5555"]);
//   const [shapes, setShapes] = useState<ShapeProps[]>(initialShapes);

//   const [shapeState, setShapeState] = useState<ShapeProps>(
//     {
//     x: 50,
//     y: 50,
//     width: 50,
//     height: 50,
//     rotation: 0,
//     shapeType: 'circle',
//      // Initialize with 'circle'
//   },
//   );
  
//   const [shapeState2, setShapeState2] = useState<ShapeProps>({
//     x: 550,
//     y: 550,
//     width: 50,
//     height: 50,
//     rotation: 0,
//     shapeType: 'vatel', // Initialize with 'circle'
//   });


//   const moveLeft = () => {
//     setShapeState((prev) => ({ ...prev, x: prev.x - 10 }));
//   };

//   const moveRight = () => {
//     setShapeState((prev) => ({ ...prev, x: prev.x + 10 }));
//   };

//   const setRectangle = () => {
  
//     setData(prevData => [...prevData, "Rectangle"]);

//     setShapeState((prev) => ({ ...prev, shapeType: 'rectangle' }));
//   };

//   const setCircle = () => {
//     setData(prevData => [...prevData, "Circle"]);
//     setData(prevData => [...prevData, "vatel"]);
//     setShapeState((prev) => ({ ...prev, shapeType: 'circle' }));
//     setShapeState2((prev) => ({ ...prev, shapeType: 'vatel' }));
//     setData(prevData => [...prevData, "Circle"]);
//     setShapeState((prev) => ({ ...prev, shapeType: 'circle' }));
//   };

//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       switch (event.key) {
//         case 'ArrowLeft':
//           moveLeft();
//           break;
//         case 'ArrowRight':
//           moveRight();
//           break;
//         case 'r':
//           setShapeState((prev) => ({ ...prev, rotation: prev.rotation - Math.PI / 4 }));
//           break;
//         default:
//           break;
//       }
//     };

//     document.addEventListener('keydown', handleKeyDown);

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   return (
//     <div style={{ position: 'relative', width: '400px', height: '400px', border: '1px solid #000' }}>
//       <Shape {...shapeState} />
//       <Shape {...shapeState2} />
//       <div style={{ marginTop: '10px' }}>
//         <Button onClick={() => setRectangle()}>Rectangle</Button>
//         <Button onClick={() => setCircle()}>Circle</Button>
//         <Button onClick={moveLeft}>Move Left</Button>
//         <Button onClick={moveRight}>Move Right</Button>
//       </div>
//       {shapes.map((a, index) => (
//         <h1 key={index}>{}</h1>
//       ))}
//     </div>
//   );
// };

// export default App;






import React from 'react';
import { Carousel, Avatar, Space } from 'antd';
import './App.css';

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const avatarStyle = {
  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
  backgroundColor: '#4C494C',
};

const App: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel style={{bottom: -190}} afterChange={onChange}>
      <div>
        {/* <h3 style={contentStyle}>1</h3> */}
        <Space direction="vertical" size={16}>
          <Space wrap size={16}>
            <Avatar style={{backgroundColor: "#4C494C"}} size={94}  />
            <Avatar style={{backgroundColor: "#4C494C"}} shape="square" size={94}  />
            <Avatar style={{backgroundColor: "#4C494C"}} shape="square" size={94}  />
            <Avatar style={avatarStyle} shape="square" size={94} />
            <Avatar style={{backgroundColor: "#4C494C"}} shape="square" size={94} />
          </Space>
        </Space>
      </div>
      <div>
        <Space direction="vertical" size={16}>
          <Space wrap size={16}>
            <Avatar style={avatarStyle} shape="square" size={94} />
            <Avatar style={{backgroundColor: "#4C494C"}} shape="square" size={94}  />
            <Avatar style={{backgroundColor: "#4C494C"}} shape="square"  size={94} />
            <Avatar style={{backgroundColor: "#4C494C"}} size={94}  />
            <Avatar style={{backgroundColor: "#4C494C"}} shape="square" size={94} />
          </Space>
        </Space>
        {/* <h3 style={contentStyle}>2</h3> */}
      </div>
      <div>
        <Space direction="vertical" size={16}>
          <Space wrap size={16}>
            <Avatar style={{backgroundColor: "#4C494C"}} size={94}  />
            <Avatar style={{backgroundColor: "#4C494C"}} shape="square" size={94}  />
            <Avatar style={{backgroundColor: "#4C494C"}} size={94}  />
            <Avatar style={avatarStyle} shape="square" size={94} />
            <Avatar style={{backgroundColor: "#4C494C"}} shape="square" size={94} />
          </Space>
        </Space>
        {/* <h3 style={contentStyle}>3</h3> */}
      </div>
      <div>
        <Space direction="vertical" size={16}>
          <Space wrap size={16}>
            <Avatar style={{backgroundColor: "#4C494C"}} size={94}  />
            <Avatar style={{backgroundColor: "#4C494C"}} shape="square" size={94}  />
            <Avatar style={avatarStyle} shape="square" size={94} />
            <Avatar style={avatarStyle} shape="square" size={94} />
            <Avatar style={{backgroundColor: "#4C494C"}} shape="square" size={94} />
          </Space>
        </Space>
        {/* <h3 style={contentStyle}>4</h3> */}
      </div>
    </Carousel>
  );
};

export default App;