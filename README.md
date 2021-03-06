# react-native-sync-swiper

A modified version of react-native-swiper, so the swiper can be sync to each other

The code is based on [leecade/react-native-swiper](https://github.com/leecade/react-native-swiper), with different purpose.

The main difference is that, when there are multiple swipers inside a swiper, it will be able to track the index of each swiper and sync the position of them.

There are two new APIs added to the original react-native-swiper code:

- props: ```onScrollBy(value)```, the props callback will return the index of current swiper
- method: ```scrollTo(index, animated = false)```, will scroll the swiper to the given index
- there is a side-effect, that the top swiper View loop property has to be {false}.

Feel free to try it, you are recommended to use react-native-swiper and modify it yourself, but not this one in your product app.

![Demo](https://github.com/hellomaya/react-native-sync-swiper/blob/master/example.gif)

