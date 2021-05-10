#include "ros/ros.h"
#include "beginner_tutorials/AddTwoInts.h"
#include <cstdlib>

int main(int argc, char **argv){
    ros::init(argc, argv, "add_two_ints_client");
    ros::NodeHandle n;
    // Register a client for the AddTwoInts Service
    // The data type has to be given
    ros::ServiceClient client 
        = n.serviceClient<beginner_tutorials::AddTwoInts>("add_two_ints");
    beginner_tutorials::AddTwoInts srv;
    // Fulfill the request with data
    srv.request.a = 1;
    srv.request.b = 2;

    // Send the request
    bool result = (client.call(srv));

    return 0;
}