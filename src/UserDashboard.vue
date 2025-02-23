<template>
  <div class="container mt-5">
    <h1 class="mb-4">Dashboard</h1>
    <div class="row">
      <div class="col-md-4">
        <div class="card text-white bg-primary mb-3">
          <div class="card-header">Profile Visits</div>
          <div class="card-body">
            <h5 class="card-title">9,123</h5>
            <p class="card-text">This week</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card text-white bg-success mb-3">
          <div class="card-header">Downloads</div>
          <div class="card-body">
            <h5 class="card-title">52,223</h5>
            <p class="card-text">This month</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card text-white bg-danger mb-3">
          <div class="card-header">Alerts</div>
          <div class="card-body">
            <h5 class="card-title">5 Alerts</h5>
            <p class="card-text">Needs immediate attention</p>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Recent Activities</h4>
        <table class="table">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Activity</th>
            <th scope="col">Status</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Oct 10, 2023</td>
            <td>Logged in</td>
            <td>Success</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Oct 9, 2023</td>
            <td>Downloaded a file</td>
            <td>Success</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
