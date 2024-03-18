
function writeCSVFile(data, filename) {
      if (!Array.isArray(data) || data.length === 0) {
        console.error("Invalid data format. Expected an array of arrays.");
        return;
      }

      const csvContent = "data:text/csv;charset=utf-8," + data.map(row => row.join(",")).join("\n");
      const encodedUri = encodeURI(csvContent);

      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", filename);
      document.body.appendChild(link);

      link.click();
      document.body.removeChild(link);
}



food_ratings_df = {"id": [], "image": [], "rating": [], "val_cat": [], "nrepeat": []};
num_rows = foods.length;
for (var i, _pj_c = 0, _pj_a = util.range(num_rows), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
    i = _pj_a[_pj_c];
    food_ratings_df["id"].push((i + 1));
    food_ratings_df["image"].push(foods[i]);
    rating = Math.round((Math.random() * 11), 2);
    food_ratings_df["rating"].push(rating);
    if ((rating <= 3.33)) {
        food_ratings_df["val_cat"].push("LV");
    } else {
        if ((rating >= 6.67)) {
            food_ratings_df["val_cat"].push("HV");
        } else {
            food_ratings_df["val_cat"].push("MV");
        }
    }
    food_ratings_df["nrepeat"].push(0);
}

const file_str = "food_ratings_" + participant_id.toString() + ".csv";
writeCSVFile(participant_id, file_str);