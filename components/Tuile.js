import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Polygon, Text as SvgText } from "react-native-svg";

export const Tuile = ({ value, color, size = 80 }) => {


  const points = `${size / 2},0 ${size},${size * 0.25} ${size},${size * 0.75} ${size / 2},${size} 0,${size * 0.75} 0,${size * 0.25}`;

  return (
    <View style={styles.view}>
      <Svg height={size} width={size}>
        <Polygon
          points={points}
          fill={color || "grey"}
          //stroke="black" 
          //strokeWidth={2}
        />

        <SvgText
          x={size / 2}
          y={size / 2}
          textAnchor="middle"
          alignmentBaseline="central"
          style={styles.svgtext}
        >
          45
        </SvgText>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({

    view :{
        height : 80,
        width : 80
    },
    svgtext : {

        fontSize:25,
        fill:"yellow",
        fontWeight:"bold",
         

        }
    }
)