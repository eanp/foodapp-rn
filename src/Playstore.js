import React, {Component} from 'react';
import {Text, View, Image, TextInput, ScrollView} from 'react-native';
import {Container, Header, Tab, Tabs, ScrollableTab, TabHeading} from 'native-base';

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <View style={{flex:1, backgroundColor:'white'}}>
          {/* Search Bar */}
          <View style={{marginHorizontal:20, marginTop:20}}>
            <View style={{position:"relative", justifyContent:"center"}}>
              <TextInput placeholder="Search for apps and games" style={{borderWidth:1, borderColor:"#eff", borderRadius:4, height:50, paddingLeft:60, paddingRight:14, backgroundColor:"#fff", elevation:5}} />
              <Image style={{height:20,width:20, position:"absolute", top:15, left:20, elevation:5}} source={require("./icon/list.png")} />
              <Image style={{height:20,width:20, position:"absolute", top:15, left:300, elevation:5}} source={require("./icon/voice.png")} />
            </View>
          </View>
          {/* Tab */}
          <Tabs locked={true} renderTabBar={()=> <ScrollableTab underlineStyle={{backgroundColor:"green"}} style={{backgroundColor:"#fff", paddingLeft:30, marginTop:10}} />}>
            <Tab heading={ <TabHeading style={{backgroundColor:"#fff"}}>
              <Text>For you</Text>
            </TabHeading>
          }>
            <ScrollView>
          <View style={{flex:1, backgroundColor:"white", marginTop:10}}>
            <View style={{backgroundColor:"white"}}>
            <Text style={{fontSize:18, paddingLeft:30, paddingTop:10, paddingBottom:10}}>Discover Recomended Games</Text>
            <Image style={{height:20,width:20, position:"absolute", top:10, left:350}} source={require("./icon/next.png")} />
            </View>
            <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{marginLeft:30, marginTop:10}}>
              <View>
                <Image source={require('./icon/rise.jpg')} style={{height:178, width:300, borderRadius:10}} />
              </View>
              <View style={{flexDirection:"row", marginTop:15}}>
                <Image source={require('./icon/rises.png')} style={{width:30,height:30, borderRadius:10, marginRight:20}} />
                <Text>Rise Of Kingdoms</Text>
              </View>
            </View>

            <View style={{marginLeft:30, marginTop:10}}>
              <View>
                <Image source={require('./icon/starwar.jpg')} style={{height:178, width:300, borderRadius:10}} />
              </View>
              <View style={{flexDirection:"row", marginTop:15}}>
                <Image source={require('./icon/marvel.png')} style={{width:30,height:30, borderRadius:10, marginRight:20}} />
                <Text>MARVEL Super War</Text>
              </View>
            </View>
            <View style={{marginLeft:30, marginTop:10}}>
              <View>
                <Image source={require('./icon/starwar.jpg')} style={{height:178, width:300, borderRadius:10}} />
              </View>
              <View style={{flexDirection:"row", marginTop:15}}>
                <Image source={require('./icon/marvel.png')} style={{width:30,height:30, borderRadius:10, marginRight:20}} />
                <Text>MARVEL Super War</Text>
              </View>
            </View>
            <View style={{marginLeft:30, marginTop:10}}>
              <View>
                <Image source={require('./icon/starwar.jpg')} style={{height:178, width:300, borderRadius:10}} />
              </View>
              <View style={{flexDirection:"row", marginTop:15}}>
                <Image source={require('./icon/marvel.png')} style={{width:30,height:30, borderRadius:10, marginRight:20}} />
                <Text>MARVEL Super War</Text>
              </View>
            </View>
            </ScrollView>
            </View>
        </View>

        <View style={{flex:1, backgroundColor:"white", marginTop:10}}>
            <View style={{backgroundColor:""}}>
            <Text style={{fontSize:18, paddingLeft:30, paddingTop:10, paddingBottom:10}}>Suggested for you</Text>
            <Image style={{height:20,width:20, position:"absolute", top:10, left:350}} source={require("./icon/next.png")} />
            </View>
            <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{marginLeft:30, marginTop:10}}>
              <View>
                <Image source={require('./icon/marvel.png')} style={{height:120, width:120, borderRadius:10}} />
              </View>
              <View style={{flexDirection:"row", marginTop:15}}>
                <Text>MARVEL Super War</Text>
              </View>
            </View>
            <View style={{marginLeft:30, marginTop:10}}>
              <View>
                <Image source={require('./icon/coc.png')} style={{height:120, width:120, borderRadius:10}} />
              </View>
              <View style={{flexDirection:"row", marginTop:15}}>
                <Text>Clash of clans</Text>
              </View>
            </View>
            <View style={{marginLeft:30, marginTop:10}}>
              <View>
                <Image source={require('./icon/mobilegend.jpg')} style={{height:120, width:120, borderRadius:10}} />
              </View>
              <View style={{flexDirection:"row", marginTop:15}}>
                <Text>Mobile Legends</Text>
              </View>
            </View>
            <View style={{marginLeft:30, marginTop:10}}>
              <View>
                <Image source={require('./icon/pubg.png')} style={{height:120, width:120, borderRadius:10}} />
              </View>
              <View style={{flexDirection:"row", marginTop:15}}>
                <Text>PUBG</Text>
              </View>
            </View>
            <View style={{marginLeft:30, marginTop:10}}>
              <View>
                <Image source={require('./icon/subway.png')} style={{height:120, width:120, borderRadius:10}} />
              </View>
              <View style={{flexDirection:"row", marginTop:15}}>
                <Text>Subway Surfer</Text>
              </View>
            </View>

            </ScrollView>
            </View>
        </View>
        <View style={{flex:1, backgroundColor:"white", marginTop:10, marginBottom:20}}>
            <View style={{backgroundColor:""}}>
            <Text style={{fontSize:18, paddingLeft:30, paddingTop:10, paddingBottom:10}}>Offline Games</Text>
            <Image style={{height:20,width:20, position:"absolute", top:10, left:350}} source={require("./icon/next.png")} />
            </View>
            <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{marginLeft:30, marginTop:10}}>
              <View>
                <Image source={require('./icon/starwar.jpg')} style={{height:190, width:330, borderRadius:10}} />
              </View>
              <View style={{flexDirection:"row", marginTop:15}}>
                <Image source={require('./icon/marvel.png')} style={{width:30,height:30, borderRadius:10, marginRight:20}} />
                <Text>MARVEL Super War</Text>
              </View>
            </View>

            <View style={{marginLeft:30, marginTop:10}}>
              <View>
                <Image source={require('./icon/starwar.jpg')} style={{height:190, width:330, borderRadius:10}} />
              </View>
              <View style={{flexDirection:"row", marginTop:15}}>
                <Image source={require('./icon/marvel.png')} style={{width:30,height:30, borderRadius:10, marginRight:20}} />
                <Text>MARVEL Super War</Text>
              </View>
            </View>
            <View style={{marginLeft:30, marginTop:10}}>
              <View>
                <Image source={require('./icon/starwar.jpg')} style={{height:190, width:330, borderRadius:10}} />
              </View>
              <View style={{flexDirection:"row", marginTop:15}}>
                <Image source={require('./icon/marvel.png')} style={{width:30,height:30, borderRadius:10, marginRight:20}} />
                <Text>MARVEL Super War</Text>
              </View>
            </View>
            <View style={{marginLeft:30, marginTop:10}}>
              <View>
                <Image source={require('./icon/starwar.jpg')} style={{height:190, width:330, borderRadius:10}} />
              </View>
              <View style={{flexDirection:"row", marginTop:15}}>
                <Image source={require('./icon/marvel.png')} style={{width:30,height:30, borderRadius:10, marginRight:20}} />
                <Text>MARVEL Super War</Text>
              </View>
            </View>
            </ScrollView>
            </View>
        </View>
        </ScrollView>

          </Tab>
          <Tab heading={
            <TabHeading style={{backgroundColor:"#fff"}}>
              <Text>Top Charts</Text>
            </TabHeading>
          }>
          </Tab>
          <Tab heading={
            <TabHeading style={{backgroundColor:"#fff"}}>
              <Text>Premium</Text>
            </TabHeading>
          }>
          </Tab>
          <Tab heading={
            <TabHeading style={{backgroundColor:"#fff"}}>
              <Text>Categories</Text>
            </TabHeading>
          }>
          </Tab>
        </Tabs>
        </View>


        
        
        
        {/* Navigations */}
        <View style={{backgroundColor:"#eee", height:2}}></View>
        <View style={{height:54, backgroundColor:'#fff', flexDirection: 'row'}}>
          <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <View style={{width:26, height:26}}>
              <Image style={{height:26,width:26, alignItems:'center'}} source={require("./icon/game.png")} />
            </View>
            <Text style={{fontSize:12, fontWeight:'bold',color:'#545454', marginTop:4}}>Games</Text>
          </View>
          <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
            <View style={{width:26, height:26}}>
              <Image style={{height:26,width:26, alignItems:'center'}} source={require("./icon/app.png")} />
            </View>
            <Text style={{fontSize:12, fontWeight:'bold',color:'#545454', marginTop:4}}>App</Text>
          </View>
          <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
            <View style={{width:26, height:26}}>
              <Image style={{height:26,width:26, alignItems:'center'}} source={require("./icon/cinema.png")} />
            </View>
            <Text style={{fontSize:12, fontWeight:'bold',color:'#545454', marginTop:4}}>Movies</Text>
          </View>
          <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <View style={{width:26, height:26}}>
              <Image style={{height:26,width:26, alignItems:'center'}} source={require("./icon/book.png")} />
            </View>
            <Text style={{fontSize:12, fontWeight:'bold',color:'#545454', marginTop:4}}>Books</Text>
          </View>
        </View>
      </View>
    );
  }
}
