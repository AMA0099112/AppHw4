import { SectionList, FlatList, StyleSheet } from "@gluestack-ui/themed";
import React from "react";

import Bookdetail from "./Bookdetail";

//傳入json檔
const Booklist = (list) => {
    //傳入json檔
    const renderSection = ({ section }) => (
        <>
            <Text style={styles.title}>{section.title}</Text>
            {/*渲染資料*/}
            <FlatList
                horizontal={true}
                data={section.data}
                renderItem={({ item }) => <Bookdetail json={item} />}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.key}
            />
        </>

    );
    const render = () => null;
    return (
        <SectionList
            sections={list}
            //渲染標題
            contentContainerStyle={{ paddingHorizontal: 10 }}
            stickySectionHeadersEnabled={false}
            showsHorizontalScrollIndicator={false}
            renderSectionHeader={renderSection}
            renderItem={render}
            keyExtractor={item => item.title}
        />
    );
};

const styles = StyleSheet.create({
    title: {
        fontFamily: "Roboto",
        fontSize: 24,
        fontWeight: "bold",
        paddingLeft: 10
    },
});

export default Booklist
