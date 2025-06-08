import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Tabela from './components/Tabela';
import { ScrollView } from 'react-native';

export default function App() {
  const headers = ['Nome', 'Idade', 'Cidade'];
  const data = [
    ['Maria', '28', 'São Paulo'],
    ['João', '35', 'Rio de Janeiro'],
    ['Ana', '22', 'Belo Horizonte'],
    ['Carlos', '40', 'Curitiba'],
    ['Fernanda', '30', 'Porto Alegre'],
    ['Roberto', '45', 'Salvador'],
    ['Patrícia', '27', 'Fortaleza'],
    ['Lucas', '33', 'Recife'],
    ['Juliana', '29', 'Brasília'],
    ['Eduardo', '38', 'Manaus'],
    ['Sofia', '31', 'Goiânia'],
    ['Ricardo', '36', 'Florianópolis'],
    ['Camila', '24', 'Vitória'],
    ['André', '39', 'Natal'],
    ['Larissa', '26', 'Maceió'],
    ['Felipe', '32', 'João Pessoa'],
    ['Tatiane', '34', 'Aracaju'],
    ['Bruno', '37', 'Campo Grande'],
    ['Isabela', '23', 'Teresina'],
    ['Gabriel', '41', 'Cuiabá'],
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Text style={styles.title}>Tabela de Pessoas</Text>
      <Tabela header={headers} data={data} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 'auto',
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});