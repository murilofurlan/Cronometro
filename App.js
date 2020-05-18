import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      number: 0.0,
      nameButtonGo: 'Vai',
      lastTime: null,
    };

    // Variavel do timer relogio
    this.timer = null;

    this.go = this.go.bind(this);
    this.clear = this.clear.bind(this);
  }

  go() {
    
    if (this.timer != null) {

      clearInterval(this.timer);
      this.timer = null;

      this.setState({
        nameButtonGo: 'Vai',
      });

    } else {

      this.timer = setInterval(() => {
        this.setState({
          number: this.state.number + 0.1,
        });
      }, 100);

      this.setState({
        nameButtonGo: 'Parar',
      });
    }
  }

  clear() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }

    this.setState({
      lastTime: this.state.number,
      number: 0.0,
      nameButtonGo: 'Vai',
    });
  }

  render() {
    return(
      <View style={styles.container}>

      <Image source={require('./src/cronometro.png')} style={styles.imgCronometrer}/>

      <Text style={styles.timer}>{this.state.number.toFixed(1)}</Text>

      <View style={styles.viewButton}>
        <TouchableOpacity style={styles.button} onPress={this.go}> 
          <Text style={styles.textButton}>{this.state.nameButtonGo}</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.clear}> 
          <Text style={styles.textButton}>Limpar</Text> 
        </TouchableOpacity>
      </View>

      <View style={styles.viewLast}>
        <Text style={styles.textLastTime}>{this.state.lastTime != null ? 'Último tempo: ' + this.state.lastTime.toFixed(1) + 's' : ''}</Text>
      </View>

      </View>
    );
  }
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00AEEF'
  },

  timer: {
    marginTop: -160,
    color: '#FFFFFF',
    fontSize: 65,
    fontWeight: 'bold',
  },

  viewButton: {
    flexDirection: 'row',
    marginTop: 80,
    height: 40,
  },

  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 40,
    margin: 18,
    borderRadius: 10
  },

  textButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00AEEF',
  },

  viewLast: {
    marginTop: 40,
  },

  textLastTime: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#FFFFFF',
  },

});

export default App;
