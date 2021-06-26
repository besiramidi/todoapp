import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Input, Button } from '@ui-kitten/components';

const CreateNote=({route, navigation}) => {

    const [value, setValue] = React.useState('');
    const [multilineValue,setMultilineValue] = React.useState('');
    const {notesList, setNotesList} = route.params;


    const saveNote=() => {

        navigation.navigate('Notes', {
            noteTitle: value, 
            noteDescription: multilineValue
        })
    }

    
    return(
        <Layout style={styles.container}>

            <Layout style={styles.layoutTitle} level='4'>
                <Input style={styles.inputStyle}

                    placeholder='Enter a Title...'
                    value={value}
                    onChangeText={nextValue => setValue(nextValue)}
                />
                <Input style={styles.inputStyle}
                    multiline={true}
                    textStyle={{ minHeight:300 }}
                    placeholder='Enter Your Note...'
                    onChangeText={nextValue => setMultilineValue(nextValue)}
                />
                <Button style={styles.buttonStyle} appearance='ghost' onPress={saveNote}>
                    Save Note
                </Button>
            </Layout>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    layoutTitle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -200
     },
     inputStyle: {
         margin: 10,
     },
  });

export default CreateNote;