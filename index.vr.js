import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  Model,
  AmbientLight,
  
} from 'react-vr';
import Button from './button.js';
class Info extends React.Component{
  state={
    object:{
      name:'Assembly2.obj',
      width:100,
      height:100
    }
  }
  render(){
    let{object}=this.state;
    return(
      <View style={styles.displayPanel}>
        <Model
		  style={{
            transform: [
              {translate: [20, 4, this.state.zoom]},
              {scale: 0.09 },
              {rotateY: this.state.rotation},
              {rotateX: 10},
              {rotateZ: -10}
            ],
          }}
          source={asset(`${object.obj}`)}
		  lit={true}
        />

      </View>
    )
  }
}

class EarthMoonVR extends React.Component {
  constructor() {
    super();
    this.state = {
      rotation: 180,
	  zoom: -60,
    };
    this.lastUpdate = Date.now();
    this.spaceSkymap = [
      '../static_assets/360_world1.jpg',
    ];
    this.styles = StyleSheet.create({
	  menu: {
		flex: 1,
        flexDirection: 'column',
        width: 2,
        height:1,
        transform: [{translate: [-1, -1, -6]}],
        right:3,
        marginLeft:7,
        bottom:-1,
        borderRadius:1,
	  },
	});

    this.rotate = this.rotate.bind(this);
  }

  componentDidMount() {
    this.rotate();
  }

  componentWillUnmount() {
    if (this.frameHandle) {
      cancelAnimationFrame(this.frameHandle);
      this.frameHandle = null;
    }
  }

  rotate() {
    const now = Date.now();
    const delta = now - this.lastUpdate;
    this.lastUpdate = now;

    this.setState({
		rotation: this.state.rotation + delta / 150
	});
    this.frameHandle = requestAnimationFrame(this.rotate);
  }

  render() {
    return (
      
      <View >
		  <Pano source={ {uri:'../static_assets/360_world2.jpg'}} />
        <AmbientLight intensity={ 5 }  />
      

        <View style={ this.styles.menu }>
          <Button text='+'
			callback={() => this.setState((prevState) => ({ zoom: prevState.zoom + 10 }) ) } />
          <Button text='-' 
			callback={() => this.setState((prevState) => ({ zoom: prevState.zoom - 10 }) ) } />
        </View>
        
        <Model
		  style={{
            transform: [
              {translate: [20, 4, this.state.zoom]},
              {scale: 0.09 },
              {rotateY: this.state.rotation},
              {rotateX: 10},
              {rotateZ: -10}
            ],
          }}
          source={{obj:asset('Lever.obj')}}
		  lit={true}
        />
		 <Model
		  style={{
            transform: [
              {translate: [-10, 4, this.state.zoom]},
              {scale: 0.09 },
              {rotateY: this.state.rotation},
              {rotateX: 10},
              {rotateZ: -10}
            ],
          }}
          source={{obj:asset('Lever.obj')}}
		  lit={true}
        />
         <Model
		  style={{
            transform: [
              {translate: [-40, 4, this.state.zoom]},
              {scale: 0.09 },
              {rotateY: this.state.rotation},
              {rotateX: 10},
              {rotateZ: -10}
            ],
          }}
          source={{obj:asset('Lever.obj')}}
		  lit={true}
      
        />

        <Text style={{backgroundColor: '#DB0118',
borderColor: 'white',color:"white",alignItems: 'center',fontSize:0.2,borderRadius:0.1,top:-4.5,left:-5.7,width:8.3,height:1.1, transform: [{translate: [0, -5.5, -6]}],
}}>The purpose of the extension 
handles was to be a kind of general tool handle that could be attached to multiple 
different tool heads to help reduce the mass of equipment flown. When attached to the 
drive/core tubes it was used as a driving surface to hammer against. It could also be 
attached to the hammer, scoop, and rake. In each of these instances its purpose was either 
to help increase leverage or reach length (Allton, 1989)</Text>
        


        <Text style={{backgroundColor: '#DB0118',
borderColor: 'white',padding:0.3,color:"white", padding:0.3,alignItems: 'center',fontSize:0.6,marginLeft:5.6,borderRadius:0.1,top:-5,width:1.3,height:0.8, transform: [{translate: [-1, -1, -6]}],
}}>Stem</Text>
<Text style={{backgroundColor: '#DB0118',
borderColor: 'white',color:"white",padding:0.3, alignItems: 'center',fontSize:0.45,marginLeft:5.6,borderRadius:0.1,top:-4.8,width:1.3,height:0.8, transform: [{translate: [-1, -1, -6]}],
}}>Scoops</Text>
<Text style={{backgroundColor: '#DB0118',
borderColor: 'white',color:"white",padding:0.3, alignItems: 'center',fontSize:0.48,marginLeft:5.6,borderRadius:0.1,top:-4.6,width:1.3,height:0.8, transform: [{translate: [-1, -1, -6]}],
}}>Tongs</Text>
<Text style={{backgroundColor: '#DB0118',
borderColor: 'white',color:"white",padding:0.3, alignItems: 'center',fontSize:0.6,marginLeft:5.6,borderRadius:0.1,top:-4.4,width:1.3,height:0.8, transform: [{translate: [-1, -1, -6]}],
}}>Rakes</Text>


<Text style={{backgroundColor: '#0079FA',
borderColor: 'white',padding:0.3,color:"white", alignItems: 'center',fontSize:0.6,marginLeft:-5,borderRadius:0.1,top:-8.3,width:1.3,height:0.8, transform: [{translate: [-1, -1, -6]}],
}}>Stem</Text>
<Text style={{backgroundColor: '#0079FA',
borderColor: 'white',padding:0.3,color:"white", alignItems: 'center',fontSize:0.45,marginLeft:-5,borderRadius:0.1,top:-8.1,width:1.3,height:0.8, transform: [{translate: [-1, -1, -6]}],
}}>Scoops</Text>
<Text style={{backgroundColor: '#0079FA',
borderColor: 'white',padding:0.3,color:"white", alignItems: 'center',fontSize:0.48,marginLeft:-5,borderRadius:0.1,top:-7.9,width:1.3,height:0.8, transform: [{translate: [-1, -1, -6]}],
}}>Tongs</Text>
<Text style={{backgroundColor: '#0079FA',
borderColor: 'white',padding:0.3,color:"white", alignItems: 'center',fontSize:0.6,marginLeft:-5,borderRadius:0.1,top:-7.7,width:1.3,height:0.8, transform: [{translate: [-1, -1, -6]}],
}}>Rakes</Text>
<Text style={{backgroundColor: '#DB0118',
borderColor: 'white',padding:0.3,color:"white", padding:0.3,alignItems: 'center',left:-1,fontSize:0.6,borderRadius:0.1,top:-12.5,width:4,height:0.8, transform: [{translate: [-1, -1, -6]}],
}}>Astro-Edu Tools</Text>

	</View>

    );
    
  }
};

AppRegistry.registerComponent('EarthMoonVR', () => EarthMoonVR);
