# machine/views.py

import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from datetime import datetime
from rest_framework.decorators import api_view

# @csrf_exempt  # This bypasses CSRF for external services
#Welding Robots
# @api_view(['POST'])
# def welding_robot(request):
#     try:
#         # Parse the incoming JSON data
#         sensor_data = request.data
        
#         # Printing for debugging purposes
#         print("Received sensor data:", sensor_data)

#         # Return the sensor data in the response
#         return JsonResponse({"status": "success", "data": sensor_data})
#     except json.JSONDecodeError:
#         return JsonResponse({"status": "error", "message": "Invalid JSON format."}, status=400)

WEBHOOK_DATA = {
    "welding_robot": [],
    "stamping_press": [],
    "painting_robot": [],
    "agv": [],
    "cnc_milling": [],
    "leak_test": []
}

@api_view(['GET', 'POST'])
def welding_robot(request):
    if request.method == 'POST':
        try:
            # Append the received data to the list for welding robots
            WEBHOOK_DATA["welding_robot"].append(request.data)
            
            # Print the received data for debugging purposes
            print("Received welding robot data:", request.data)

            return JsonResponse({"status": "success", "message": "Webhook data received.", "data": request.data})
        
        except json.JSONDecodeError:
            return JsonResponse({"status": "error", "message": "Invalid JSON format."}, status=400)
    
    elif request.method == 'GET':
        # Return all stored welding robot data
        return JsonResponse({"status": "success", "data": WEBHOOK_DATA["welding_robot"]})

#Stamping Presses
@api_view(['GET', 'POST'])
def  stamping_press(request):
    if request.method == 'POST':
        try:
            # Append the received data to the list for welding robots
            WEBHOOK_DATA["stamping_press"].append(request.data)
            
            # Print the received data for debugging purposes
            print("Received stamping_press data:", request.data)

            return JsonResponse({"status": "success", "message": "Webhook data received.", "data": request.data})
        
        except json.JSONDecodeError:
            return JsonResponse({"status": "error", "message": "Invalid JSON format."}, status=400)
    
    elif request.method == 'GET':
        # Return all stored welding robot data
        return JsonResponse({"status": "success", "data": WEBHOOK_DATA["stamping_press"]})

# painting_robot
@api_view(['POST', 'GET'])
def  painting_robot(request):
    if request.method == 'POST':
        try:
            # Append the received data to the list for welding robots
            WEBHOOK_DATA["painting_robot"].append(request.data)
            
            # Print the received data for debugging purposes
            print("Received painting_robot data:", request.data)

            return JsonResponse({"status": "success", "message": "Webhook data received.", "data": request.data})
        
        except json.JSONDecodeError:
            return JsonResponse({"status": "error", "message": "Invalid JSON format."}, status=400)
    
    elif request.method == 'GET':
        # Return all stored welding robot data
        return JsonResponse({"status": "success", "data": WEBHOOK_DATA["painting_robot"]})

#agv
@api_view(['POST', 'GET'])
def agv(request):
    if request.method == 'POST':
        try:
            # Append the received data to the list for welding robots
            WEBHOOK_DATA["agv"].append(request.data)
            
            # Print the received data for debugging purposes
            print("Received agv data:", request.data)

            return JsonResponse({"status": "success", "message": "Webhook data received.", "data": request.data})
        
        except json.JSONDecodeError:
            return JsonResponse({"status": "error", "message": "Invalid JSON format."}, status=400)
    
    elif request.method == 'GET':
        # Return all stored welding robot data
        return JsonResponse({"status": "success", "data": WEBHOOK_DATA["agv"]})
# cnc_milling
@api_view(['POST', 'GET'])
def  cnc_milling(request):
    if request.method == 'POST':
        try:
            # Append the received data to the list for welding robots
            WEBHOOK_DATA["cnc_milling"].append(request.data)
            
            # Print the received data for debugging purposes
            print("Received cnc_milling data:", request.data)

            return JsonResponse({"status": "success", "message": "Webhook data received.", "data": request.data})
        
        except json.JSONDecodeError:
            return JsonResponse({"status": "error", "message": "Invalid JSON format."}, status=400)
    
    elif request.method == 'GET':
        # Return all stored welding robot data
        return JsonResponse({"status": "success", "data": WEBHOOK_DATA["cnc_milling"]})

# leak_test
@api_view(['POST', 'GET'])
def leak_test(request):
    if request.method == 'POST':
        try:
            # Append the received data to the list for welding robots
            WEBHOOK_DATA["leak_test"].append(request.data)
            
            # Print the received data for debugging purposes
            print("Received leak_test data:", request.data)

            return JsonResponse({"status": "success", "message": "Webhook data received.", "data": request.data})
        
        except json.JSONDecodeError:
            return JsonResponse({"status": "error", "message": "Invalid JSON format."}, status=400)
    
    elif request.method == 'GET':
        # Return all stored welding robot data
        return JsonResponse({"status": "success", "data": WEBHOOK_DATA["leak_test"]})