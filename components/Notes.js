import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import { Layout, Text , Input , Button , List , Card } from '@ui-kitten/components';


const Notes = ({route,navigation}) => {
    
    const [value, setValue] = React.useState('');
    const [notesList,setNotesList] = React.useState([]) // [] - array

    const goToCreateNote = () => {
        navigation.setOptions({
            setNotesList: setNotesList
        })
        navigation.navigate('CreateNote', {
            notesList: notesList,
        })
    }

    useEffect(() => {
        const noteTitle = (route.params) ? route.params.noteTitle : 'not working'
        const noteDescription = (route.params) ? route.params.noteDescription : 'not working'
        notesList.push({title: noteTitle, description: noteDescription})
        setNotesList(notesList)
    }, [route])
    
    const renderItemHeader = (headerProps, info) => (
        <View {...headerProps}>
          <Text category='h6'>
            {info.item.title}
          </Text>
        </View>
      );

    const renderItem = (info) => (
        <Card
          style={styles.item}
          status='basic'
          header={headerProps => renderItemHeader(headerProps, info)}>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
            a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Text>
        </Card>
      );

      console.log(notesList)
    return(
        <Layout style={styles.container}>
            <Layout style={styles.layoutTitle} level='4'>
                <Text style={styles.layoutTitleText}>Notes</Text>
                <Input
                    placeholder='Search Notes'
                    value={value}
                    onChangeText={nextValue => setValue(nextValue)}
                />
                <Layout style={styles.layoutTitle} level='4'>
                    <List
                    style={styles.containerList}
                    contentContainerStyle={styles.contentContainer}
                    data={notesList}
                    renderItem={renderItem}
                    />
                </Layout>
            </Layout>
            <Layout style={styles.layoutButton} level='4'>
                <Button style={styles.button} status='success' size='tiny' onPress={goToCreateNote}>
                    Create Note
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
    layout: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    layoutTitle: {
        flex: 1,
      },
    layoutTitleText: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 10,
    },
    button: {
        marginBottom: 20,
        marginRight: 20,
    },
    layoutButton: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    containerList: {
        maxHeight: 320,
    },
    contentContainer: {
        paddingHorizontal: 8,
        paddingVertical: 4,
      },
      item: {
        marginVertical: 4,
      },
  });


export default Notes