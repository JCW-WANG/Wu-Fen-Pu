<script>
    function change_toy(obj) {
        obj.style.opacity = "1.0";
        document.getElementById("viewer").src = obj.src;
        document.getElementById("viewer").style.visibility = "visible";
    }

    function recover_toy(obj) {
        obj.style.opacity = "0.3";
        document.getElementById("viewer").style.visibility = "hidden";
    }

</script>
