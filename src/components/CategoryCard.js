import React from 'react'
import {
    View,
    ToucheableOpacity,
    Text,
    Image,
} from 'react-native';

function CategoryCard({containerStyle,categoryItem,onPress}) {
    return (
        <ToucheableOpacity style={{
            flexDirection:'row',
            alignItems:'center',
            padding:10,
            marginTop:10, 
            borderRadius:5,
            backgroundColor:"#fafafa",
            ...containerStyle
        }}
            onPress={onPress}
        >
            <Image source={categoryItem.image} 
            resizeMode="cover"
            style={{
                width:"25%",
                height:100,
                borderRadius:5
            }}
            />
            

            {/* Details */}
            <View style={{
                width:"65%",
                paddingHorizontal:20,
            }}>
                {/* name */}
                <Text style={{
                    flex:1,

                }}>
                    {categoryItem.name}
                </Text>
                {/* Serving */}
                <Text style={{
                    flex:1,
                    
                }}>
                    {categoryItem.duration}
                </Text>
            </View>
        </ToucheableOpacity>
    )
}

export default CategoryCard
