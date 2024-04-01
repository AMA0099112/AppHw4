//書and 排版
import { Box, VStack } from "@gluestack-ui/themed"
import React from "react"
import { Image, Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native";

//傳json的參數
const Bookdetail = ({ json }) => {

    const { navigate } = useNavigation();

    return (
        <Box p={10} marginX={1} marginBottom={2} borderRadius={3} shadow={2}>
            <VStack bg='#fff'>
                <VStack marginBottom={10}>
                    <Pressable
                        onPress={() => album.press ? navigate('Detail', album) : null}
                    >
                        <Image
                            key={json.id}
                            source={{ uri: json.image }}
                            style={{ width: 140, height: 140 }}
                        />
                    </Pressable>
                </VStack>

            </VStack>


        </Box>


    )
}
export default Bookdetail