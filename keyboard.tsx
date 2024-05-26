import React,{useState} from "react";
import { SafeAreaView, View, Text, TouchableOpacity, LayoutAnimation } from "react-native";
export default (props:any) => {
    const [height, setHeight] = useState(300)
    const changeHeight = (value: number) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
        setHeight(value)
    }
    const renderCenter = () => {
        return (
            <View
                style = {{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <Text
                    style = {{
                        color: "#303233",
                        fontSize: 20,
                        fontWeight: "bold",
                    }}>
                    {"1 + 1 = 2"}
                </Text>
            </View>
        )
    }
    const renderChangeHeight = () => {
        return (
            <View
                style = {{
                    height: 100,
                    flexDirection: "row",
                }}>
                <TouchableOpacity
                    onPress={()=>changeHeight(200)}
                    style = {{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#388EFF",
                        borderRadius: 8,
                        margin: 20,
                    }}>
                    <Text
                        style = {{
                            color: "#FFFFFF",
                            fontSize: 18,
                            fontWeight: "bold",
                        }}>
                        {"Small"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>changeHeight(300)}
                    style = {{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#388EFF",
                        borderRadius: 8,
                        margin: 20,
                    }}>
                    <Text
                        style = {{
                            color: "#FFFFFF",
                            fontSize: 18,
                            fontWeight: "bold",
                        }}>
                        {"Medium"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>changeHeight(400)}
                    style = {{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#388EFF",
                        borderRadius: 8,
                        margin: 20,
                    }}>
                    <Text
                        style = {{
                            color: "#FFFFFF",
                            fontSize: 18,
                            fontWeight: "bold",
                        }}>
                        {"Large"}
                    </Text>
                </TouchableOpacity>
            </View>

        )
    }

    const renderButton = (key: string, backgroundColor: string) => {
        return (
            <TouchableOpacity
                onPress={()=>alert(key)}
                style = {{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: backgroundColor || "#C9C9C9",
                    borderRadius: 8,
                    margin: 2,
                }}>
                <Text
                    style = {{
                        color: "#303233",
                        fontSize: 16,
                        fontWeight: "bold",
                    }}>
                    {key}
                </Text>
            </TouchableOpacity>
        )
    }
    const renderKey = (key: string, backgroundColor: string) => {
        return (
            <View
                style = {{
                    flex: 1,
                }}>
                {renderButton(key, backgroundColor)}
            </View>
        )
    }
    const renderRow1 = () => {
        return (
            <View
                style = {{
                    flex: 1,
                    flexDirection: "row",
                }}>
                {renderKey('AC','')}
                {renderKey(':','')}
                {renderKey('x','')}
                {renderKey('Delete','')}
            </View>
        )
    }
    const renderRow2 = () => {
        return (
            <View
                style = {{
                    flex: 1,
                    flexDirection: "row",
                }}>
                {renderKey('7','white')}
                {renderKey('8','white')}
                {renderKey('9','white')}
                {renderKey('-','')}
            </View>
        )
    }
    const renderRow3 = () => {
        return (
            <View
                style = {{
                    flex: 1,
                    flexDirection: "row",
                }}>
                {renderKey('4','white')}
                {renderKey('5','white')}
                {renderKey('7','white')}
                {renderKey('+','')}
            </View>
        )
    }
    const renderRow4 = () => {
        return (
            <View
                style = {{
                    flex: 1,
                    flexDirection: "row",
                }}>
                {renderKey('1','white')}
                {renderKey('2','white')}
                {renderKey('3','white')}
            </View>
        )
    }
    const renderKey000 = () => {
        return (
            <View
                style = {{
                    flex: 2,
                }}>
                {renderButton('000','white')}
            </View>
        )
    }
    const renderRow5 = () => {
        return (
            <View
                style = {{
                    flex: 1,
                    flexDirection: "row",
                }}>
                {renderKey000()}
                {renderKey('0','white')}
            </View>
        )
    }
    const renderRow45 = () => {
        return (
            <View
                style = {{
                    flex: 2,
                    flexDirection: "row",
                }}>
                <View
                    style = {{
                        flex: 3,
                    }}>
                    {renderRow4()}
                    {renderRow5()}
                </View>
                {renderKey('=','')}
            </View>
        )
    }
    return (
        <SafeAreaView
            style = {{
                flex: 1,
                backgroundColor: "#FFFFFF",
            }}>
            {renderCenter()}
            {renderChangeHeight()}
            <View
                style = {{
                    height: height,
                    backgroundColor: "#F7F7F7",
                }}>
                {renderRow1()}
                {renderRow2()}
                {renderRow3()}
                {renderRow45()}
            </View>
        </SafeAreaView>
    )
}