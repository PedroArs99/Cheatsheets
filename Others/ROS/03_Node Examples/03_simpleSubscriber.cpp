#include "ros/ros.h"
#include "std_msgs/String.h"

// The callback has to be registered on the Master
// and will be called from ROS when a new message comes
void chatterCallback(const std_msgs::String::ConstPtr& msg){
    std::cout << "Message received: "
              << msg.data << std:endl;
}

unsigned int main (int argc, char **argv){
    ros::init(argc, argv, "myFirstNodeSub");
    ros::NodeHandle n;
    // Subscribe to the topic "chatter", with a queue of size 100
    // and call "chatterCallback" when a message is received
    ros::Subscriber sub = n.subscribe("chatter", 1000, chatterCallback);

    // Calls the ROS Event Loop
    // Without it there's no callbacks
    // spin() doesn't return any value until Ros is ended
    // spinOnce() can be used inside a loop
    // Execute the callback for all the message in the loop and then follow with the loop
    ros::spin();
    return 0;
}