import React from 'react'
import {Text,Image,View,StyleSheet, Alert, TouchableOpacity } from 'react-native'
import Icon from '@expo/vector-icons/Feather';

const imgIago = 'https://github.com/IagoDantas.png'

const App = ()=>{

    const handleRedeSocial = (redeSocial)=>{
        switch(redeSocial){
            case 'linkedin':
                Alert.alert('Meu linkedin','https://www.linkedin.com/in/iago-dantas-5ab59820a/')
            break
            case 'github':
                Alert.alert('Meu github','https://www.github.com/IagoDantas')
            break
            case 'facebook':
            Alert.alert('Meu facebook','https://www.facebook.com/iago.dantasdossantos')
            break
        }
    }


    return(
        <View style={style.page}>
            <View style={style.containerCabecalho}>
                <Image source={imgIago} style={style.img}>
                </Image>
                <Text style={style.name}>Iago Dantas</Text>
                <Text style={style.description}>Desenvolvedor Web e Mobile</Text>
                
                <View style={style.social}> 
                    <TouchableOpacity onPress={()=> handleRedeSocial('github')}> 
                    {/* eu nao posso passar a função como parametro pq ela iria executar sempre que abrisse o app */}
                        <Icon name="github" size={30}
                        color='#262626'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> handleRedeSocial('facebook')}>
                        <Icon name="facebook" size={30}
                        color='#262626'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> handleRedeSocial('linkedin')}>
                        <Icon name="linkedin" size={30}
                        color='#262626'
                        />
                    </TouchableOpacity>
                </View >
                <View style={style.cardContainer}> 
                    <View style={style.card}>
                        <View style={style.cardHeader}>
                            <Text style={style.cardHeaderText}>
                                Experiência Profissional
                            </Text>
                        </View>
                        <View style={style.cardContent}>
                            <Text style={style.cardContentText}>
                                Freelancer
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={style.cardContainer}> 
                    <View style={style.card}>
                        <View style={style.cardHeader}>
                            <Text style={style.cardHeaderText}>Formação Acadêmica</Text>
                        </View>
                        <View style={style.cardContent}>
                            <Text style={style.cardContentText}>Colégio Serrano Guardia</Text>
                            <Text style={style.cardContentText}>Etec Guarulhos</Text>
                            <Text style={style.cardContentText}>Fatec Guarulhos</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    page:{
        backgroundColor:'#e7e7e7',
        flex:1,
        alignItems:'center',
        
    },
    img:{
        width:250,
        height:250,
        borderRadius:125
    },
    containerCabecalho:{
        marginTop:50,
        alignItems:'center',
        justifyContent:'center'
    },
    name:{
        fontSize:26,
        fontWeight:'bold',
        marginTop:10
    },
    description:{
        color:'#939393',
        marginBottom:10,
        fontSize:20,
        fontWeight:'bold',
    },
    social:{
        flexDirection:'row',
        justifyContent:'space-between',
        width: '50%',
        marginTop:20,
    },
    cardContainer:{
        width:'100%', 
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
    },
    card:{
        width:'70%',
        borderRadius:5,
        borderWidth:1,
        borderColor:'939393',
        padding:10,
        backgroundColor:'#fff',
        alignItems:'center',
    },
    cardContent:{
        marginTop:10,
        alignItems:'center',
    },
    cardContentText:{
        color:'#939393',
        fontWeight:'bold',
        marginTop:5
    },
    cardHeaderText:{
        fontWeight:'bold'
    }

});

export default App;