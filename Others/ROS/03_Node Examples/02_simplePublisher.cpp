/*
* A node, that send a message "Hello World" to the topic "chatter"
*/


// "ros/ros.h" is the ROS standart library. It always has to be bunded.
#include "ros/ros.h"
// "std_msgs/String.h" is the type for using strings
#include "std_msgs/String.h"

unsigned int main (int argc, char **argv){
    ros::init(argc,argv, "myFirstNodePub");
    // Element that manages all the interactions with the Master
    ros::NodeHandle n;
    // The topic will be published under the name "chatter",
    // with datatype string and queue size 1000
    ros::Publisher topic1 = n.advertise<std_msgs::String>("chatter", 1000);
    
    // Declaration of the message that will be sent
    std_msgs::String msg;
    // Set message attrs.
    // String messages has only data attr.
    msg.data = "Hello world!";
    // Send message
    topic1.publish(msg);
    
    // The topic will take care to reply the message to all the nodes that are subscribed

    return 0;
}