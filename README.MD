<h1 align="center">Rename and Sort Illustrator Layers Script</h1>
<div align="center">
  <a href="https://github.com/DmetroSK/bulk-seat-map-rename-ai/stargazers"><img src="https://img.shields.io/github/stars/DmetroSK/bulk-seat-map-rename-ai" alt="Stars Badge"/></a>
<a href="https://github.com/DmetroSK/bulk-seat-map-rename-ai/network/members"><img src="https://img.shields.io/github/forks/DmetroSK/bulk-seat-map-rename-ai" alt="Forks Badge"/></a>
<a href="https://github.com/DmetroSK/bulk-seat-map-rename-ai/pulls"><img src="https://img.shields.io/github/issues-pr/DmetroSK/bulk-seat-map-rename-ai" alt="Pull Requests Badge"/></a>
<a href="https://github.com/DmetroSK/bulk-seat-map-rename-ai/issues"><img src="https://img.shields.io/github/issues/DmetroSK/bulk-seat-map-rename-ai" alt="Issues Badge"/></a>
<a href="https://github.com/DmetroSK/bulk-seat-map-rename-ai/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/DmetroSK/bulk-seat-map-rename-ai?color=2b9348"></a>
<a href="https://github.com/DmetroSK/bulk-seat-map-rename-ai/blob/main/LICENSE"><img src="https://img.shields.io/github/license/DmetroSK/bulk-seat-map-rename-ai?color=2b9348" alt="License Badge"/></a>
</div>
<br/>

## About The Project

This Adobe Illustrator script automates the process of **renaming, sorting, and grouping** selected objects.  
It’s especially useful for workflows like **seat mapping**, **event layouts**, or **organizing complex vector documents**.

## Built With

`JavaScript`

## Features

- **Automatic renaming** of selected objects using:
  - Area name
  - Section name
  - Row name
  - Sequential seat number
- **Sorting** of objects from **right to left** based on their `left` position.
- **Automatic grouping** of renamed objects into a group named after the row.

## Example Naming Convention

If you enter the following prompts:

- **Area**: `A`
- **Section**: `S1`
- **Row**: `R1`

The selected objects will be renamed like this:

```sh
A-S1-R1-1
A-S1-R1-2
A-S1-R1-3
```

And they will be grouped inside a group named:

`R1`

## How to Use

1. Open your Illustrator document.
2. Select the objects you want to rename and group.
3. Run the script in Illustrator:
   - Go to `File > Scripts > Other Script…`
   - Select the `.jsx` file.
4. Enter **Area Name**, **Section Name**, and **Row Name** when prompted.
5. Done ✅ Your objects will now be renamed, sorted, and grouped automatically.

## Functions Overview

- **`renameAndSortLayers()`**

  - Main function: prompts user, renames, sorts, and groups.

- **`getSelectedObjects()`**

  - Retrieves all currently selected objects across all layers.

- **`groupSelectedObjects(rowName, selectedSeats)`**
  - Creates a new group named after the row and places the selected objects inside it.

## Requirements

- Adobe Illustrator (tested with modern versions).
- Basic knowledge of running `.jsx` scripts in Illustrator.

## Notes

- Objects are sorted from **right → left** (higher `left` value first).
- If **no objects are selected**, the script will show an alert.
- The **group name** will match the `Row Name` entered in the prompt.

## Changelog

All notable changes to this project will be documented in this section.

- 1.0.0 - 2023-05-03 - Initial Commit with main features

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Support

Give a ⭐️ if this project helped you!
