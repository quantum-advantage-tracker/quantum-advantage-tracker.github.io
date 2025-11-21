# Index

- [How to submit a new circuit model?](#how-to-submit-a-new-circuit-model)
- [How to submit a new circuit instance?](#how-to-submit-a-new-circuit-instance)
- [How to submit a new hamiltonian?](#how-to-submit-a-new-hamiltonian)
- [How to submit a new hamiltonian instance?](#how-to-submit-a-new-hamiltonian-instance)

# How to submit a new circuit model?

To submit a new circuit model, follow these steps:

1.  **Identify the path**: Determine which of the paths your circuit model belongs to:
    - `observable-estimations`
    - `classically-verifiable-problems`

2.  **Create a model directory**: Navigate to the `circuit-models` subdirectory within the chosen path folder. Create a new directory for your model.
    - Example: `data/observable-estimations/circuit-models/my_new_model/`

3.  **Create model documentation**: Create a `README.md` file inside your model directory.
    - This file should describe the problem or experiment, provide any relevant mathematical background, and list the institutions involved.
    - You can use `data/observable-estimations/circuit-models/operator_loschmidt_echo/README.md` as a template.

4.  **Add circuit files**: Place your circuit files (e.g., `.qasm` files) inside the directory you just created.

5.  **Update `circuit-models.json`**: Open the `circuit-models.json` file located in the path root (e.g., `data/observable-estimations/circuit-models.json`). Add an entry for your new model.
    - The key should match your model directory name.
    - The `instances` array should list each circuit instance with its `id`, `path` (relative to the model directory), and other metadata like `qubits` and `gates`.

    **Example `circuit-models.json` entry:**

    ```json
    {
      "my_new_model": {
        "instances": [
          {
            "id": "my_new_model_instance_1",
            "path": "instance_1.qasm",
            "qubits": 5,
            "gates": 100
          }
        ]
      }
    }
    ```

6.  **Update issue templates**: Add the new circuit instance IDs to the relevant issue template in `.github/ISSUE_TEMPLATE/`. This ensures that users can select the new instances when submitting results.
    - For `observable-estimations`, update `01-submission-path-observable-estimations.yml`.
    - For `classically-verifiable-problems`, update `03-submission-path-classically-verifiable-problems.yml`.

    Look for the `options` list under the `circuit` dropdown and append your new instance IDs.

7.  **Create a pull request**: Commit your changes and open a pull request (PR) to the repository.
    - Include a clear description of the new model and any relevant context.
    - Ensure all checks pass.

# How to submit a new circuit instance?

To submit a new circuit instance to an existing circuit model, follow these steps:

1.  **Identify the model**: Locate the existing model directory within the appropriate path (e.g., `data/observable-estimations/circuit-models/existing_model/`).

2.  **Add circuit file**: Place your new circuit file (e.g., `.qasm`) inside the existing model directory.

3.  **Update `circuit-models.json`**: Open the `circuit-models.json` file for that path. Find the entry for the existing model and append your new instance to the `instances` array.

    **Example:**

    ```json
    {
      "existing_model": {
        "instances": [
          {
            "id": "existing_model_instance_1",
            ...
          },
          {
            "id": "existing_model_instance_2",
            "path": "existing_model_instance_2.qasm",
            "qubits": 10,
            "gates": 200
          }
        ]
      }
    }
    ```

4.  **Update issue templates**: Add the new circuit instance IDs to the relevant issue template in `.github/ISSUE_TEMPLATE/`. This ensures that users can select the new instances when submitting results.
    - For `observable-estimations`, update `01-submission-path-observable-estimations.yml`.
    - For `classically-verifiable-problems`, update `03-submission-path-classically-verifiable-problems.yml`.

    Look for the `options` list under the `circuit` dropdown and append your new instance IDs.

5.  **Create a pull request**: Commit your changes and open a pull request.

# How to submit a new hamiltonian?

To submit a new hamiltonian, follow these steps:

TODO

# How to submit a new hamiltonian instance?

To submit a new hamiltonian instance to an existing hamiltonian, follow these steps:

TODO
