<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 text-left">
        <h1 class="text-center">Vue Resource</h1>
        <div class="form-group">
          <input
            class="form-control"
            name="username"
            placeholder="User Name"
            type="text"
            v-model="user.username"
          >
        </div>
        <div class="form-group">
          <input
            class="form-control"
            name="email"
            placeholder="Email"
            type="text"
            v-model="user.email"
          >
        </div>
        <button class="btn btn-block btn-success" @click="submit">Add new</button>
        <hr>
        <input type="text" v-model="node" class="form-control mb-3">
        <button class="btn btn-block btn-warning mb-3" @click="getAllData">Get all data</button>
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(user, index) in users"
            :key="index"
          >{{ user.username }} - {{ user.email }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        email: ""
      },
      users: [],
      resource: {},
      node: "data"
    };
  },
  methods: {
    submit() {
      // this.$http
      //   .post("", this.user)
      //   .then(
      //     response => {
      //       console.log(response);
      //     },
      //     error => {
      //       console.log(error);
      //     }
      //   );
      this.resource.createItem(this.user);
    },
    getAllData() {
      // this.$http
      //   .get("")
      //   .then(response => {
      //     return response.json();
      //   })
      //   .then(data => {
      //     const dataUsers = [];
      //     dataUsers.push(data);
      //     this.users = dataUsers;
      //   });
      // const dataUsers = [];
      // this.resource.get({}).then(response => {
      //   dataUsers.push(response.body);
      //   this.users = dataUsers;
      // });
      const dataUsers = [];
      this.resource.getNodeData({ node: this.node }).then(response => {
        dataUsers.push(response.body);
        this.users = dataUsers;
      });
    }
  },
  created() {
    const customActions = {
      createItem: { method: "POST", url: "user.json" },
      getNodeData: { method: "GET" }
    };
    this.resource = this.$resource('{node}.json', {}, customActions);
  }
};
</script>

<style>
</style>
