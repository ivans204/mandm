<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function index(User $user)
    {
        $users = User::all();
        return response()->json([
            'message' => 'List of all users',
            'data' => $users,
        ]);
    }

    public function all(User $user) {
        $users = User::all();
        return response()->json([
            'message' => 'List of all users',
            'data' => $users,
        ]);
    }

    public function search(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'q' => 'required|string|min:3',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Invalid search query',
                'errors' => $validator->errors()
            ], 422);
        }

        $searchTerm = $request->input('q');

        $searchedUsers = User::where('name', 'like', "%{$searchTerm}%")
            ->get();

        if ($searchedUsers->isEmpty()) {
            return response()->json([
                'success' => false,
                'message' => "Users not found!",
            ], 404);
        }

        $groupIds = array_unique($searchedUsers->pluck('group_id')->toArray());
        $users = User::all();
        $usersByGroup = [];

        foreach ($groupIds as $groupId) {
            $usersByGroup[$groupId] = $users->filter(function ($user) use ($groupId) {
                return $user->group_id === $groupId;
            })->toArray();
        }

        return response()->json([
            'success' => true,
            'message' => 'Search results found',
            'users' => [...$usersByGroup,]
        ]);
    }

    public function searchPerson(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'q' => 'required|string|min:3',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Invalid search query',
                'errors' => $validator->errors()
            ], 422);
        }

        $searchTerm = $request->input('q');

        $searchedUsers = User::where('name', 'like', "%{$searchTerm}%")->get();

        if ($searchedUsers->isEmpty()) {
            return response()->json([
                'success' => false,
                'message' => "Users not found!",
            ], 404);
        }

        return response()->json([
            'success' => true,
            'message' => 'Search results found',
            'users' => $searchedUsers
        ]);
    }

    public function updateUsers(Request $request)
    {
          $this->validate($request, [
            'users' => 'required|array',
            'users.*.userId' => 'required|integer|exists:users,id',
            'users.*.attend' => 'string|max:2',
            'users.*.transport' => 'string|max:2',
            'users.*.meal' => 'nullable|string|max:255',
        ]);

        $updatedUsers = [];
        foreach ($request->input('users') as $userData) {
            if (isset($userData['userId'])) {
                $user = User::find($userData['userId']);

                if ($user) {
                    $user->update($userData);
                    $updatedUsers[] = $user;
                } else {
                // Handle user not found
                }
            } else {
                // Handle missing 'id' key (optional: log error, return specific error message)
            }
        }

        return response()->json([
            'success' => true,
            'message' => 'Users updated successfully!',
            'data' => $updatedUsers,
        ]);
    }

    public function updatePerson(Request $request, $id)
    {
        $this->validate($request, [
            'attend' => 'string|max:2',
            'transport' => 'string|max:2',
            'meal' => 'nullable|string|max:255',
        ]);

        $user = User::find($id);

        if (!$user) {
            return response()->json([
            'error' => 'User not found!',
            ], 404);
        }

        $userData = $request->input('user');
        $user->update($userData);

        return response()->json([
            'success' => true,
            'message' => 'User updated successfully!',
            'data' => $user->fresh(), 
        ]);
    }

    public function exportCSV()
    {
        $filename = 'gosti.csv';
    
        $headers = [
            'Content-Type' => 'text/csv',
            'Content-Disposition' => "attachment; filename=\"$filename\"",
            'Pragma' => 'no-cache',
            'Cache-Control' => 'must-revalidate, post-check=0, pre-check=0',
            'Expires' => '0',
        ];
    
        return response()->stream(function () {
            $handle = fopen('php://output', 'w');
    
            // Add CSV headers
            fputcsv($handle, [
                'Name',
                'Attend',
                'Transport',
                'Meal',
            ]);
    
             // Fetch and process data in chunks
            User::chunk(25, function ($users) use ($handle) {
                foreach ($users as $user) {
             // Extract data from each user.
                    $data = [
                        isset($user->name)? $user->name : '',
                        isset($user->attend)? $user->attend : '',
                        isset($user->transport)? $user->transport : '',
                        isset($user->meal)? $user->meal : '',
                    ];
    
             // Write data to a CSV file.
                    fputcsv($handle, $data);
                }
            });
    
            // Close CSV file handle
            fclose($handle);
        }, 200, $headers);
    }
}
