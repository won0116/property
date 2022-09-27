<script>
import axios from "axios";

export default {
  name: "apiUtil",
  methods: {
    fetchData: function () {
      axios
        .get(
          "http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTrade?serviceKey=v4tAgOkXnwC28Mrxb6RplngbHziwshZRKMeUnGqdDagccrp%2BXa%2Fqoy%2BqYuxJQxBaGXN%2BJeX5iSWl5eKV%2BlDKrA%3D%3D&LAWD_CD=11110&DEAL_YMD=201512"
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
