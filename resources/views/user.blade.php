<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" 
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" 
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <title>Document</title>
    <style>
        table {
            border-collapse:separate; 
            border-spacing: 0 1em;
        }
    </style>
</head>
<body>
    <div class="container">
        <table class="rwd-table">
            <thead>
                <th colspan="8">
                    <a href="{{ route('export') }}" class="btn btn-success">Export CSV</a>
                </th>
            </thead>
            <tbody>
                <tr>
                <th>name</th>
                <th>attend</th>
                <th>transport</th>
                <th>meal</th>
                </tr>
                
                @foreach ($users as $list)
                <tr>
                    <td>{{ $list->name }}</td>
                    <td>{{ $list->attend }}</td>
                    <td>{{ $list->transport }}</td>
                    <td>{{ $list->meal }}</td>
                @endforeach
            </tbody>
        </table>
    </div>
</body>
</html>