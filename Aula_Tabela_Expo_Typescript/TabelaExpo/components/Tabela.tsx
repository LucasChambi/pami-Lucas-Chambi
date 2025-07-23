import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

type TabelaProps = {
    header: string[];
    data: string[][];
};

const Tabela: React.FC<TabelaProps> = ({ header, data }) => {
    return (
        <ScrollView horizontal>
            <View>
                <View style={styles.headerRow}>
                    {header.map((headerItem, index) => (
                        <View key={index} style={styles.cell}>
                            <Text style={styles.HeaderText}>{headerItem}</Text>
                        </View>
                    ))}
                </View>
                {data.map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.dataRow}>
                        {row.map((cell, cellIndex) => (
                            <View key={cellIndex} style={styles.cell}>
                                <Text>{cell}</Text>
                            </View>
                        ))}
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    // Nome, Idade, Cidade
    headerRow: {
        flexDirection: 'row',
        backgroundColor: '#aaddff',
        borderColor: '#000000ff',
        textAlign: 'left',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderTopWidth: 1,
    },
    //tabela de dados
    dataRow: {
        flexDirection: 'row',
        borderColor: '#ccc',
        textAlign: 'left',
        backgroundColor: '#eeeeeeff',
        borderBottomWidth: 1,
        borderTopWidth: 1,
    },
    // dados
    cell: {
        padding: 10,
        borderColor: '#ccc',
        minWidth: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
    },

    HeaderText: {
        fontWeight: 'bold',
    },
});

export default Tabela;